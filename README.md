# This project won the Accel Prize and 1.5K USD at the Proffer Blockchain Hackathon
Competing against teams from MIT, Cambridge, IISc, and IITs. Read about the winners [here](https://blog.proffer.network/proffer-hackathon-winners-2017-1adb2078a691).

1. [Link to demo-video](https://www.youtube.com/watch?v=55RoBoMfOVo&feature=youtu.be)<br>
2. [Link to contract deployed on Ropsten testnet](https://ropsten.etherscan.io/tx/0xb4d20f9acb407187b71da9c6e2dd64a5f42f4fd81e1f780f06e4c7b8ce974f62) <br>

## 0xSHG (Zero interest loans for rural microfinance)
Microfinance institutions are essential to economic sustenance of rural finance and small businesses. Initiatives like Self Help Groups (SHGs) have been transformational to [changing lives of rural populations (primarily women)](http://www.iosrjournals.org/iosr-jhss/papers/Vol7-issue1/I0714248.pdf?id=5966) depend on the fact that when villagers pool money, mutual accountability & peer pressure reduces risk of non-repayment of loans, get loans from banks with flat interest rates.

### What are SHGs?
Self-help groups are rural microfinance intiatives where multiple villagers pool money together to apply for collateral-free flat-interest rate bank loans. This is possible because mutual accountability in the group  [minimizes risk of non-repayment of loans](https://en.wikipedia.org/wiki/Solidarity_lending). 

However, problems with rural MFIs have been observed, some of which include but are not restricted to:
1. High interest rates in banks lead to groups turning to predatory moneylenders to repay bank-loans.
2. Patchy maintenance of accounts & member-info weakens a group's credit score.
3. A central head for each group is required, which centralizes power in the hands of a few and is a gateway to misuse of funds.
4. Financial illiteracy and banking paperwork compound the problem by making banks forbidding.
5. Since no checks are kept on the head of the group, this leads to abuse of power (disallowing certain members from attending meetings, keeping women out of financial matters).


### How can blockchains help?
As we observe, the problems are both financial (interests, maintenance of accounts) and organisations (central authority => corruption). Blockchains are a unique solution which addresses both these issues. ***Blockchains are a fundamentally new way of not just organising financial capital but also social capital.*** A new way of organising finances and power in rural microfinancial groups.

__**To solve these problems, we've created an Aadhar-linked digital pan-Indian capital-pooling network. Through this network, MAXIMUM POSSIBLE microloan requests are fully funded with 0% interest (least request satisfied first) and the reserve wealth is re-distributed into the system.**__ People can exit the network by requesting their deposited money, which they’ll receive once the loans given are repayed back. This systems allows workers to not only fund each other, but also get microloans for seed-funding their own businesses.

This allows villagers all across India to pool their resources and receive **interest-free microloans** from the network. Blockchain tech enables micro-transactions (which allows for a greater inclusion for poverty-stricken individuals), automatic bookkeeping (no delay or pathy maintenance of ledgers on-chain) in a transparent (all chain transactions are open) manner. We remove the need for a group managing authority (decentralized smart contract). By needing consent from previous members to enter the network and making them accountable for him, **we introduce peer pressure into the network**. This [lowers chances of non-repayment of loans](https://www.microfinancegateway.org/library/microfinance-and-mechanics-solidarity-lending-improving-access-credit-through-innovations).


### Protocol
1. Every 3 months, all loan-requests in the network are collected and the maximum possible loan-requests are fulfilled.
2. Every person who receives a loan, has 3 months to pay back his loan. 
3. Failure to do so will mean 4 members accountable for that person (shown in video) will either make him pay or split the debt, thus creating an incentive for the four members to keep the person accountable.


<img src="https://raw.githubusercontent.com/jangidkrishna/0-loan_dapp/master/gui.png">

## Impact to Society of Solution:

| Problems in rural microfinance | How our project solves them |
| --- | --- |
| Predatory loans from banks, moneylenders | Zero interest microloans |
| Patchy maintenance of accounts | Automatic maintenance of fault-tolerant, decentralized ledger |
| Certain groups (women, dalits) not allowed into groups | Anonymity on the network ensures equality for all|
| Need for centralized organisational leadership | Auto-governance by solidity smart contract |                                         | Risk of non-repayment of loans is high | Risk is mitigated by introducing peer-pressure on the blockchain (main innovation) |
| Possibility of corruption inside group | All transactions are open and transparent |
| [Rural people find bank braches forbidding](https://thewire.in/171614/microfinance-bandhan-public-sector-banks/) | Intuitive single-page web-interface for all transactions |


#### Peer Pressure on the blockchain (main innovation)
Solidarity lending (peer pressure and mutual accountability to repaying loans) is an building block of rural microfinance. But in a pan-India digital network, this peer-pressure would be minimised. We achieve peer-pressure on a peer-to-peer network by using a novel accountability solution, as described below.
A new member on the network can only be added once his Aadhar identity been physically **validated by 4 pre-existing nodes on the network**. If the person defaults, the four people responsibility for him are required to either make him pay or split his debt. This roots the digital network in physical space, and simulates the same social pressure necessary for solidarity lending groups.

### Zero-Interest loans
This is made possible by removing traditional banks from the equation. The group pools money internally and acts as a seed-funding co-operative, every three months.


## Architecture and Tech-stack

![System Architecture](https://raw.githubusercontent.com/jangidkrishna/0xSHG/master/architecture.jpg)


### Architecture Modules
##### 1. Validation
Initial members of the network call add_member to add a new person to the network, once they've validated his identity using Aadhar.
##### 2. Deposit Money
The newly added member must deposit money to the pool to be able to request a loan.
##### 3. Request Loan
A person can request a loan if 
  1. He has been validated by 4 existing members
  2. He has deposited some amount of money
##### 4. Receive Loan
All loan request are sorted in increasing order of loan-request amount. Every three months, the money in pool is used to fullfill the maximum number of loan-requests. Any reserve wealth in the pool is re-distributed back to the network. The is the function of pay_loan.

### Tech Stack
1. Ethereum smart constracts (in solidity)
2. Ropsten testnet  
3. Truffle framework
4. MetaMask
5. Remix IDE
6. Web3.js
7. Aadhar-validator.js


##### Steps to compile in Truffle
1. git clone https://github.com/SatoshiNextTechLab/0xSHG/
2. truffle compile
3. truffle migrate
4. truffle console
5. Interact using Web3.js


##### Steps to compile GUI
1. clone repo https://github.com/SatoshiNextTechLab/0xSHG/
2. cd into 0xSHG-master/GUI
2. npm install .
3. bower install
4. gulp serve

##### Steps to interact and test quickly on Remix with MetaMask
1. go to https://remix.ethereum.org/
2. Ensure MetaMask is setup and connected to Ropsten Network
3. load the SmartContract at https://github.com/SatoshiNextTechLab/0xSHG/blob/master/contracts/driver1.sol
4. Compile the contract, move to tab run.
5. In load contract address enter `0x60a5a1971d1c66D754C6Fbfac17DD1EBe6BAdcef`.Hit At Address button.

## Who does it benefit
Everyone in a rural setting who requires a loan but is unable to get one due to low income and high credit-liability score, [especially rural women](https://www.youthkiawaaz.com/2017/05/self-help-groups-an-anecdote-of-women-empowerment-in-india/). Our solution provides  an alternative, where a person can take zero-interest loans, without any collateral, while the network ensures the person is compelled (peer pressure on-chain) to return the amount.

## Flaws in the network
1. Adoption : Initial adoption of the system might be slow due to technical illiteracy, but [NABARD's E-Shakti initiative](https://eshakti.nabard.org/Aboutus.aspx) has shown us that once a few villages are tested, [adoption is exponential](https://eshakti.nabard.org/Downloads/EShakti%20Brochure%202017A.pdf).

2. Difference in unit of currency: The solution model requires ether/wei as the basic unit of currency. However, a similar system can be put in place for the government's cryptocurrency LakshmiCoin.

3. Possibility of leftover reserves in pool: After the distribution of loans every 3 months, there is a possibility that some amount of pool money is left unused (all loan requests satisfied). This reserve can be utilised by redistributing it equally into the network.

4. If everyone exits the network at the same time: Though this is extremely improbable, if this happens everyone in the system will have to wait 3 months to receive their money back, with possibility of losses to initial deposit (in case someone defaults and all consentees have exited network).


## Built by undergraduates at [Next Tech Lab, SRM University](http://nextech.io/index2.html)

### The Team
1. Arjun Bahuguna - Ideator/Documentation
2. Krishna Jangid - Solidity Developer
3. Souradeep Das - Solidity Developer
4. Projjal Gupta - Front-End/Web3 Integration
5. Yadhukrishna S Pai - Solidity Developer
