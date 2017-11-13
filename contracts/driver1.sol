pragma solidity ^0.4.6;

contract driver {

  function driver() public payable {
  }

  struct member {

    uint addtime;
    uint counter;

    address member_address;

    address ref_1;
    address ref_2;
    address ref_3;
    address ref_4;

  }

  mapping (address => member) link;

  uint count=1;

  address var1;
  address var2;
  address var3;
  address var4;

    event SomeoneTriedToAddSomeone(address personWhoTried,address personWhoWasAdded);
    event SomeoneAddedMoneyToThePool(address personWhoSent,uint moneyHeSent);
    event SomeoneRequestedForMoney(address personWhoRequested,uint requestedM);

  function onlynew(address newadd){

      if(link[newadd].ref_1==0x0)
        count=1;

  }

  uint currtime;

  modifier check_eligibility_of_payments(address _check_address) {

    if(link[_check_address].counter < 4){
      throw;
    }
    else{
      _;
    }

  }

  uint init_member_counter = 1;

  function init_members() {

    if(init_member_counter <5){
      link[msg.sender]=member(now,4,msg.sender,0x1,0x2,0x3,0x4);
      init_member_counter++;
    }
    else{
      throw;
    }

  }

  function add_Member(address _req_member) check_eligibility_of_payments(msg.sender) {

    onlynew(_req_member);

    if(count==1)
    {
      link[_req_member]=member(now,count,_req_member,msg.sender,0,0,0);
    }
    else if (count==2)
    {
      link[_req_member].ref_2=msg.sender;
    }
    else if (count==3)
    {
        link[_req_member].ref_3=msg.sender;
    }

    else if (count==4)
    {
      link[_req_member].ref_4=msg.sender;
    }

    count++;

    SomeoneTriedToAddSomeone(msg.sender,_req_member);

  }

  function list_refrences(address _master_address) constant returns (address _ref1,address _ref2,address _ref3,address _ref4) {

    return (link[_master_address].ref_1,link[_master_address].ref_2,link[_master_address].ref_3,link[_master_address].ref_4);

  }

  function getPoolMoney() constant returns (uint){

    return this.balance;

  }

//No constantto force user to deposit_to_pool for 6 months

  function deposit_to_pool(uint __amount) payable {

    this.transfer(__amount);
    SomeoneAddedMoneyToThePool(msg.sender,__amount);

  }

  uint[] public amounts;

  mapping (uint => address) amount_map;

  modifier onlyafter6()
  {
      uint memtime=link[msg.sender].addtime;
      if(memtime==0)
      {
          throw;
      }
      uint nowtime=now;
      uint _days=(nowtime-memtime)/(24*60*60);
      if(_days >= 180)
      {
          _;
      }
      else
      {
          throw;
      }

  }
  modifier onlymember()
  {
      uint memcount=link[msg.sender].counter;
      if(memcount >= 4)
      {
        _;
      }
      else
      {
          throw;
      }
  }

  function req_Money(uint _amount_) onlyafter6 onlymember {

    amounts.push(_amount_);
    amount_map[_amount_] = msg.sender;

   SomeoneRequestedForMoney(msg.sender,_amount_);
  }

  uint temp;

  function bubble_sort(){

    for(uint j=0;j<amounts.length-1;j++){

      for(uint k=0;k<amounts.length-j-1;k++){

        if(amounts[k]>amounts[k+1]){

          temp = amounts[k];
          amounts[k] = amounts[k+1];
          amounts[k+1] = temp;

        }
      }
    }
  }

  uint sum;

  uint t;

  uint counter_sum=1;

  function assign_loan_amount_from_pool() returns (uint){

    sum = 0;

   for(t=0;t<amounts.length-1;t++){

    if(sum<=amounts[t]){

        sum=sum+amounts[t];
         counter_sum = t;

    }
   }

   return sum;

  }

  function check_time(address ad1) constant returns(uint)
  {
      return(link[ad1].addtime);
  }

  function displayAllowedForLoan() payable returns(address[]){

    uint length = amounts.length;
    address[] memory addr = new address[](length);

    for(uint q=0; q <= counter_sum; q++ ){

      addr[q] = amount_map[amounts[q]];

    }

    return addr ;
  }

  address temp_address;

  modifier least_amount_loan() {

    if(sum <= (this.balance)/4){
      throw;
    }
    else{
      _;
    }

  }

  function pay_loan() payable least_amount_loan()  {

    for(uint w=0; w < counter_sum; w++ ){

      temp_address = amount_map[amounts[w]];
      temp_address.transfer(amounts[w]);

    }
  }

 function getcurrtime() constant returns(uint)
  {
      return now;
  }

  function () payable{
  }

}
