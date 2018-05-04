var abidef = '[{"constant":true,"inputs":[],"name":"displayAllowedForLoan","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getcurrtime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"bubble_sort","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPoolMoney","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"amounts","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newadd","type":"address"}],"name":"onlynew","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount_","type":"uint256"}],"name":"req_Money","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_master_address","type":"address"}],"name":"list_refrences","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pay_loan","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ad1","type":"address"}],"name":"check_time","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_req_member","type":"address"},{"name":"__aadhaar","type":"uint256"}],"name":"add_Member","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_aadhaar","type":"uint256"}],"name":"init_members","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"assign_loan_amount_from_pool","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"__amount","type":"uint256"}],"name":"pool","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"personWhoTried","type":"address"},{"indexed":false,"name":"personWhoWasAdded","type":"address"}],"name":"SomeoneTriedToAddSomeone","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"personWhoSent","type":"address"},{"indexed":false,"name":"moneyHeSent","type":"uint256"}],"name":"SomeoneAddedMoneyToThePool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"personWhoRequested","type":"address"},{"indexed":false,"name":"requestedM","type":"uint256"}],"name":"SomeoneRequestedForMoney","type":"event"}]';

var bytecode = '6060604052600160035560016009556000600f55426000819055506116d9806100296000396000f3006060604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806302c3d9cb146100d257806306874e8b1461013c578063162afafc14610165578063309652ec1461017a57806345f0a44f146101a357806348f1093c146101da57806350da36a9146102135780636f1863d81461023657806373bce8bd146102985780639965e15e146102ad578063b77366be146102fa578063d1eea4881461033c578063f628a31d1461035f578063fe31311214610388575b005b34156100dd57600080fd5b6100e56103a0565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561012857808201518184015260208101905061010d565b505050509050019250505060405180910390f35b341561014757600080fd5b61014f61049b565b6040518082815260200191505060405180910390f35b341561017057600080fd5b6101786104ac565b005b341561018557600080fd5b61018d6105ba565b6040518082815260200191505060405180910390f35b34156101ae57600080fd5b6101c460048080359060200190919050506105d9565b6040518082815260200191505060405180910390f35b34156101e557600080fd5b610211600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105fd565b005b341561021e57600080fd5b610234600480803590602001909190505061068a565b005b341561024157600080fd5b61026d600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506107cf565b6040518085815260200184815260200183815260200182815260200194505050505060405180910390f35b34156102a357600080fd5b6102ab610a78565b005b34156102b857600080fd5b6102e4600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610bda565b6040518082815260200191505060405180910390f35b341561030557600080fd5b61033a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610c26565b005b341561034757600080fd5b61035d6004808035906020019091905050611215565b005b341561036a57600080fd5b610372611502565b6040518082815260200191505060405180910390f35b61039e600480803590602001909190505061159a565b005b6103a8611648565b60006103b2611648565b6000600a805490509250826040518059106103ca5750595b90808252806020026020018201604052509150600090505b600f548111151561049257600b6000600a8381548110151561040057fe5b906000526020600020900154815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828281518110151561044957fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505080806001019150506103e2565b81935050505090565b600042600881905550600854905090565b600080600091505b6001600a80549050038210156105b657600090505b600182600a8054905003038110156105a957600a600182018154811015156104ed57fe5b906000526020600020900154600a8281548110151561050857fe5b906000526020600020900154111561059c57600a8181548110151561052957fe5b906000526020600020900154600c81905550600a6001820181548110151561054d57fe5b906000526020600020900154600a8281548110151561056857fe5b906000526020600020900181905550600c54600a6001830181548110151561058c57fe5b9060005260206000209001819055505b80806001019150506104c9565b81806001019250506104b4565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b600a818154811015156105e857fe5b90600052602060002090016000915090505481565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156106875760016003819055505b50565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490506004811015156107c657600a80548060010182816106ef919061165c565b91600052602060002090016000849091909150555033600b600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fa0da870b7fcbff60609acf1d100a2afa1bc2f8c3ac1e18adb02543416f81e9e03383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16107cb565b600080fd5b5050565b60008060008060026000600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015460026000600260008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015460026000600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015460026000600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015493509350935093509193509193565b60008062278d006000544203811515610a8d57fe5b0490506000600382811515610a9e57fe5b061415610bd157600091505b600f5482111515610bcc57600b6000600a84815481101515610ac857fe5b906000526020600020900154815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16601060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600a84815481101515610b8e57fe5b9060005260206000209001549081150290604051600060405180830381858888f193505050501515610bbf57600080fd5b8180600101925050610aaa565b610bd6565b600080fd5b5050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050919050565b336004600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101541015610c7757600080fd5b610c80836105fd565b60016003541415610fb657826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101006040519081016040528042815260200160035481526020018473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815250600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e08201518160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050611167565b600260035414156110475733600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611166565b6003805414156110d75733600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611165565b600460035414156111645733600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b5b5b6003600081548092919060010191905055507fc74df5c6414508e852097d2ccbbe13ca9dc37da175bdab8e2a4082fe47e4ed013384604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505050565b336001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600560095410156114fa5761010060405190810160405280428152602001600481526020013373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001600173ffffffffffffffffffffffffffffffffffffffff168152602001600273ffffffffffffffffffffffffffffffffffffffff168152602001600373ffffffffffffffffffffffffffffffffffffffff168152602001600473ffffffffffffffffffffffffffffffffffffffff16815250600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e08201518160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506009600081548092919060010191905055506114ff565b600080fd5b50565b600080600d819055506000600e819055505b600a80549050600e54101561159257600a600e5481548110151561153457fe5b906000526020600020900154600d5411151561157b57600a600e5481548110151561155b57fe5b906000526020600020900154600d5401600d81905550600e54600f819055505b600e60008154809291906001019190505550611514565b600d54905090565b3073ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015156115da57600080fd5b7fab3779fad464c399de969e43c58d16533b72c0a6eabe2e0ffbc2aba64b8c818c3382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b602060405190810160405280600081525090565b815481835581811511611683578183600052602060002091820191016116829190611688565b5b505050565b6116aa91905b808211156116a657600081600090555060010161168e565b5090565b905600a165627a7a72305820365f4a54d266067a46e5fabdbadf65233a1784d7776311e153b17ba8559c2d920029';

var conadd = '0x60a5a1971d1c66D754C6Fbfac17DD1EBe6BAdcef';

var cb;
var abiDefinition; 
var contract;
var instance;
var estimatedGas;
var parameterValue;
var txnObject;


window.addEventListener('load', function() {
    
  if (typeof web3 !== 'undefined') {
      alert('Unlock Metamask');
      $('#constat').text('CONNECTED');
      startApp();
  } else {
      alert('Install and Unlock Metamask');
      $('#constat').text('DISCONNECTED');
  }})

function startApp(){
    cb = web3.eth.coinbase;
    console.log(cb);
    
    abiDefinition = JSON.parse(abidef);
    contract = web3.eth.contract(abiDefinition);
    instance = contract.at(conadd);
    
    console.log(instance);
}

function preFunc()   {
    estimatedGas = 1000000;

    txnObject = {
        from: web3.eth.coinbase,
        gas: estimatedGas
    }}
    
function AddInit2(){  
       preFunc();
       parameterValue = document.getElementById('Uaadh').value;
       instance.init_members.sendTransaction(parameterValue,txnObject,function(error, result)  {
       console.log('RECVED>>',error,result);   
            if(error){
                console.log('Send Transaction:   ',error,'',true);
            } else {
                console.log('Send Transaction:   ',parameterValue,result,result,false);
                alert('Succesful Transaction');
            }
        });
}
    
function AddInit() {
  var aadhid = $('#Uaadh').val();
  var adVal = isValidNumber(aadhid);
  if (adVal){
    alert('Valid Aadhar ID');
    AddInit2();
  }else{
    alert('Invalid Aadhar ID');
  }
}

function aadhar2(){  
       preFunc();
       param1 = document.getElementById('Uaadr').value;
  	param2 = document.getElementById('Uaadh').value;
       instance.add_Member.sendTransaction(param1,param2,txnObject,function(error, result)  {
       console.log('RECVED>>',error,result);   
            if(error){
                console.log('Send Transaction:   ',error,'',true);
            } else {
                console.log('Send Transaction:   ',parameterValue,result,result,false);
                alert('Succesful Transaction');
            }
        });
}

function aadhvalidation() {
  var aadhid = $('#Uaadh').val();
  var adVal = isValidNumber(aadhid);
  if (adVal){
    alert('Valid Aadhar ID');
    aadhar2();
  }else{
    alert('Invalid Aadhar ID');
  }
}

function PolDep(){  
       preFunc();
       parameterValue = document.getElementById('poolDep').value;
       instance.pool.sendTransaction(parameterValue,txnObject,function(error, result)  {
       console.log('RECVED>>',error,result);   
            if(error){
                console.log('Send Transaction:   ',error,'',true);
            } else {
                console.log('Send Transaction:   ',parameterValue,result,result,false);
                alert('Succesful Transaction');
            }
        });
}

function LoanReq(){  
       preFunc();
       parameterValue = document.getElementById('AmtReq').value;
       instance.req_Money.sendTransaction(parameterValue,txnObject,function(error, result)  {
       console.log('RECVED>>',error,result);
            if(error){
                console.log('Send Transaction:   ',error,'',true);
            } else {
                console.log('Send Transaction:   ',parameterValue,result,result,false);
                alert('Succesful Transaction');
            }
        });
}
