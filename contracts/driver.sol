pragma solidity ^0.4.0;
contract driver {

  struct member {

    uint counter;
    address member_address;
    address ref_1;
    address ref_2;
    address ref_3;
    address ref_4;

  }

  member[] public members;

  mapping (address => member) link;

  modifier ifexists(address check){

    for(uint i=0; i < members.length; i++){

      if(check == members[i].member_address){
        throw;
      }
      else{
        _;
      }

    }
  }

  function add_Member(address _req_member) ifexists( _req_member){

    member memory new_member;
    new_member.member_address = _req_member;
    new_member.counter = 1;
    new_membaaer.ref_1 = msg.sender;
    members.push(new_member);
    link[_req_member] = member();

  }
}
  function member_exists(){

    for(uint i=0; i < members.length; i++){



  }
