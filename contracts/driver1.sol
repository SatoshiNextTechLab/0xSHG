pragma solidity ^0.4.0;
contract driver {

  function driver() payable {

  }

  struct member {

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

  modifier onlynew(address newadd){
      if(link[newadd].ref_1==0x0)
        count=1;
        else
        _;
  }

  function add_Member(address _req_member) {


    if(count==1)
    {
      var1=msg.sender;
      link[_req_member]=member(count,_req_member,var1,0,0,0);
    }
    else if (count==2)
    {
      var2=msg.sender;
      link[_req_member]=member(count,_req_member,var1,var2,0,0);
    }
    else if (count==3)
    {
      var3=msg.sender;
      link[_req_member]=member(count,_req_member,var1,var2,var3,0);
    }
    else if (count==4)
    {
      var4=msg.sender;
      link[_req_member]=member(count,_req_member,var1,var2,var3,var4);
    }
    count++;

  }

  function list_refrences(address _master_address) constant returns (address _ref1,address _ref2,address _ref3,address _ref4) {

    return (link[_master_address].ref_1,link[_master_address].ref_2,link[_master_address].ref_3,link[_master_address].ref_4);

  }

  modifier check_eligibility_of_payments(address _check_address) {

    if(link[_check_address].counter < 4){
      throw;
    }
    else{
      _;
    }

  }

  function getMyMoney() constant returns (uint){

    return this.balance;

  }

  function pool(uint __amount) payable {
    this.transfer(__amount);
  }

  uint[] public amounts;

  mapping (uint => address) amount_map;

  function req_Money(uint _amount_) {

    amounts.push(_amount_);
   amount_map[_amount_] = msg.sender;

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

  uint sum=0;

  uint t;

  uint counter_sum = 1;

  function assign_loan() constant returns (uint){

   for(t=0;t<amounts.length-1;t++){

    if(sum<amounts[t]){
        sum=sum+amounts[t];
         counter_sum = t;
    }

   }

   return sum;

  }

  function display() constant returns(address[]){
    uint length = amounts.length;
    address[] memory addr = new address[](length);
    for(uint q=0; q <= counter_sum; q++ ){

      addr[q] = amount_map[amounts[q]];
    }
    return addr ;

  }

  address temp_address;

  function pay_loan() {

    for(uint w=0; w < counter_sum; w++ ){

      temp_address = amount_map[amounts[w]];
      temp_address.transfer(amounts[w]);


    }
  }


  function () payable{
  }

}
