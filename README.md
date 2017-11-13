# Proffer Network Hackathon
This repository contains the source code for the rural microfinance project and the corresponding web interface, built for the Proffer Network Hackathon

1. Link to video: <br>
2. [Link to contract deployed on Ropsten testnet](https://ropsten.etherscan.io/tx/0xb4d20f9acb407187b71da9c6e2dd64a5f42f4fd81e1f780f06e4c7b8ce974f62) <br>
3. Contract address: 0x60a5a1971d1c66D754C6Fbfac17DD1EBe6BAdcef

## 0xSHG (Zero interest loans for rural microfinance)
Microfinance institutions are essential to economic sustenance of rural finance and small businesses. Initiatives like Self Help Groups (SHGs) have been transformational to [changing lives of rural populations (which are 97% women)](http://www.iosrjournals.org/iosr-jhss/papers/Vol7-issue1/I0714248.pdf?id=5966) depend on the fact that when villagers pool money, mutual accountability & peer pressure reduces risk of non-repayment of loans, get loans from banks with flat interest rates.

### What are SHGs?
Self-help groups are rural microfinance intiatives where multiple villagers pool money together to apply for collateral-free flat-interest rate bank loans. This is possible because mutual accountability in the group  [minimizes risk of non-repayment of loans](https://en.wikipedia.org/wiki/Solidarity_lending).

### What we built?
We propose a simple model, where villagers all across India can pool their resources and receive *interest-free microloans* from the network. Blockchain technology enables micro-transactions (which allows for a greater inclusion for poverty-stricken individuals), automatic bookkeeping (no delay or pathy maintenance of ledgers on-chain) in a transparent (all chain transactions are open) manner. We remove the need for a managing authority for the group (decentralized smart contract). By needing consent from previous members to enter the network and making them accountable for him, we introduce peer pressure into the network. This lowers chances of non-repayment of loans.

Using these elements, we can create an Aadhar-linked digital pan-Indian SHG network. In this network, MAXIMUM POSSIBLE microloan requests are fully funded with 0% interest (least request satisfied first) and the reserve wealth is re-distributed into the system. People can exit the network by requesting their deposited money, which they’ll receive in the next bidding when the loans are repayed.

<img src="https://raw.githubusercontent.com/jangidkrishna/0-loan_dapp/master/gui.png">

## Impact to Society of Solution:

| Problems in rural microfinance | How our project solves them |
| --- | --- |
| Patchy maintenance of accounts | Automatic maintenance of fault-tolerant, decentralized ledger |
| Lack of organisational leadership | Auto-governance by solidity smart contract |                                                      | Risk of non-repayment of loans is high | Risk is mitigated by introducing peer-pressure on the blockchain |
| Possibility of corruption inside group | All transactions are open and transparent |
| [Rural people find bank braches forbidding](https://thewire.in/171614/microfinance-bandhan-public-sector-banks/) | Intuitive web-interface for all transactions |
| Women mightn't be able to attend SHG meetings | Anonymity on the network ensures equality for all|

### Scheme
Every 3 months, all loan-requests in the network are collected and the maximum possible loan requests are fulfilled.
Every person who receives a loan has 3 months (until next bidding) to pay back his loan. Failure to do so will mean 4 members accountable for that person will bear the loan, thus creating an incentive for the four members to keep the person accountable.

#### Peer Pressure on the blockchain
Solidarity lending (peer pressure and mutual accountability to repaying loans) is an building block of rural microfinance. But in a pan-India digital network, this peer-pressure would be minimised. We achieve peer-pressure on a peer-to-peer network by using a novel innovative accountability solution, as described below.
A new member on the network can only be added once his Aadhar identity been physically validated by 4 pre-existing nodes on the network. If the person defaults, the four people responsibility for him are required to split his debt. This roots the digital network in physical space, and simulates the same social pressure necessary solidarity lending groups.

### Zero-Interest loans
This is made possible by removing traditional banks from the equation. The group pools money internally and acts as a seed-funding co-operative, every three months. The main benefactors of this scheme are women, since 94% SHG members have been found to be women.


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
7. Aadhar_validator.js


##### Steps to compile in Truffle
1. git clone https://github.com/jangidkrishna/0xSHG.git
2. truffle compile
3. truffle migrate
4. truffle console
5. Interact using Web3.js


##### Steps to compile GUI
1. clone repo https://github.com/jangidkrishna/0xSHG.git
2. cd into 0xSHG-master/GUI
2. npm install .
3. gulp serve


## Who does it benefit
The major benefactor of this solution are the daily wage earners and the small scale business owners who have potential to succed but lack the collateral for applying for bank loans and can't afford to pay high interest rates. This solution provides them oppurtunity to take flat interest loans without any collateral while still making sure they are compelled(peer pressure) to return the amount.


## Flaws in the network
1.Adpotion : initial adoption of the system might be slow due to technical illiteracy , whereas E-Shakti is an example wherein the technological adoption was surprisingly fast and similar outcome is possible in case of 0xSHG.
2.Difference in unit of currency : The solution model requires ether/wei as the basic unit of currency.Hence , an intermediatory like exchange is required so that the model is compatitable.
3.Leftover reserve in pool : After the distribution ,there is a possibility that some amount of pool money is left over.This stays static for the next 2 months after which again the distribution takes place.The problem can be mitigated by redistribution among the peers after the loan distribution.
