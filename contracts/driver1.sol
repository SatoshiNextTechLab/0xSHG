pragma solidity ^0.4.0;

contract driver {
  uint TimeStart; //time stamp of the block
  //constructor
  function driver() public payable {
      TimeStart=now;

  }

  //links aadhar to address
  mapping(uint=>address)usr_aadhar;

  //structure of member
  struct member {

    uint addtime;
    uint counter;

    address member_address;
    uint aadhaar;
    //for refrences of the member
    address ref_1;
    address ref_2;
    address ref_3;
    address ref_4;

  }

  //maps address to the member structure
  mapping (address => member) link;

  uint count=1;

  address var1;
  address var2;
  address var3;
  address var4;

  //trigered when member is added
  event SomeoneTriedToAddSomeone(address personWhoTried,address personWhoWasAdded);
  //trigered when money is deposited
  event SomeoneAddedMoneyToThePool(address personWhoSent,uint moneyHeSent);
  //trigered when requested for loan
  event SomeoneRequestedForMoney(address personWhoRequested,uint requestedM);

  //resets counter for new member
  function onlynew(address newadd){

      if(link[newadd].ref_1==0x0)
        count=1;

  }

  uint currtime;

  //check eligibility of member for payments
  modifier check_eligibility_of_payments(address _check_address) {

    if(link[_check_address].counter < 4){
      throw;
    }
    else{
      _;
    }

  }

  uint init_member_counter = 1;

  //assigns initial members
  function init_members(uint _aadhaar) {
    usr_aadhar[_aadhaar]=msg.sender;
    if(init_member_counter <5){
      link[msg.sender]=member(now,4,msg.sender,_aadhaar,0x1,0x2,0x3,0x4);
      init_member_counter++;
    }
    else{
      throw;
    }

  }

  //validates new member by refrences
  function add_Member(address _req_member,uint __aadhaar) check_eligibility_of_payments(msg.sender) {

    onlynew(_req_member);

    if(count==1)
    {usr_aadhar[__aadhaar]=_req_member;
      var1=msg.sender;
      link[_req_member]=member(now,count,_req_member,__aadhaar,var1,0,0,0);
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

  //show aadhar refrences of a member
  function list_refrences(address _master_address) constant returns (uint,uint,uint,uint) {

    return (link[link[_master_address].ref_1].aadhaar,link[link[_master_address].ref_2].aadhaar,link[link[_master_address].ref_3].aadhaar,link[link[_master_address].ref_4].aadhaar);

  }

  //shows the money in the pool
  function getPoolMoney() constant returns (uint){

    return this.balance;

  }

  //deposit money in the pool
  function pool(uint __amount) payable {

    this.transfer(__amount);
    SomeoneAddedMoneyToThePool(msg.sender,__amount);

  }

  uint[] public amounts;
//requested money mapped to member address
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

  //Checks if the member is valid
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
//To request money from the pool
  function req_Money(uint _amount_) onlymember {

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

  uint counter_sum=0;
//Total distributable money from the pool
  function assign_loan_amount_from_pool() constant returns (uint){

    sum = 0;

   for(t=0;t<amounts.length;t++){

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
//Address of members who will receive loan
  function displayAllowedForLoan() constant returns(address[]){

    uint length = amounts.length;
    address[] memory addr = new address[](length);

    for(uint q=0; q <= counter_sum; q++ ){

      addr[q] = amount_map[amounts[q]];

    }

    return addr ;
  }

  address temp_address;
//Check if the month is end of three months cycle
  modifier every_3_months {

    uint months=(now-TimeStart)/(24*60*60*30);
    if(months%3==0)
    {
        _;
    }
    else
    {
        throw;
    }

  }
//Pay the members the requested loan amount
  function pay_loan() every_3_months {

    for(uint w=0; w <= counter_sum; w++ ){

      temp_address = amount_map[amounts[w]];
      temp_address.transfer(amounts[w]);

    }
  }

 function getcurrtime() constant returns(uint)
  {

      currtime=now;
      return currtime;
  }

  function () payable{
  }

}

