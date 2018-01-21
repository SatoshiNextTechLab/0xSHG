
## Impact to Society of Solution:
| Problems with current model | How our project solves them |
| --- | --- |
| Predatory loans from banks, moneylenders | Zero interest microloans |
| Patchy maintenance of accounts | Automatic maintenance of fault-tolerant, decentralized ledger |
| Certain groups (women, dalits) not allowed into groups | Anonymity on the network ensures equality for all|
| Need for centralized organisational leadership | Auto-governance by solidity smart contract |                                         | Risk of non-repayment of loans is high | Risk is mitigated by introducing peer-pressure on the blockchain (main innovation) |
| Possibility of corruption inside group | All transactions are open and transparent |
| [Rural people find bank braches forbidding](https://thewire.in/171614/microfinance-bandhan-public-sector-banks/) | Intuitive single-page web-interface for all transactions |


## Architecture and Tech-stack

![System Architecture]()


### Architecture Modules
##### 1. Validation
Initial members of the network call add_member to add a new person to the network, once they've validated his identity using Aadhar.
##### 2. Restrictions
The newly added member must deposit money to the pool to be able to request a loan.
##### 3. Penalisation
A person can request a loan if 
  1. He has been validated by 4 existing members
  2. He has deposited some amount of money

