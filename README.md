# Proffer Network Hackathon
This repository contains the source code for the rural microfinance project and the corresponding web interface.
## What's going on here?
blockchains aren't just a way of checking validity of transactions in distributed way, they're also novel methods of organising societies.
Rural microfinance problems aren't just financial, but also.


> How it will help me?
table of problems in MFI vs how we solve them

Microfinance institutions are essential to economic sustenance of rural finance and small businesses. Initiatives like Self Help Groups (SHGs) depend on the fact that when villagers pool money, peer-pressure reduces defaulter risk, get loans from banks with flat interest rates.

What are SHGs?
(highlight peer pressure)
Self-help groups 



Who this will impact and how much?

Shown in video
How members are added, this adds peer pressure

We propose a simple model, where villagers all across India can pool their resources and receive interest-free microloans from the network. Blockchain technology enables micro-transactions (which allows for a greater inclusion for poverty-stricken individuals), automatic bookkeeping (no delay or pathy maintenance of ledgers) in a transparent (all transactions are open) manner. We remove the need for a central managing authority by using a smart contract. By needing consent from previous members to enter the network and making them accountable for him, we introduce peer pressure into the network. This lowers chances of non-repayment of loans (https://en.wikipedia.org/wiki/Solidarity_lending).

Using these elements, we can create an Aadhar-linked digital pan-Indian SHG network. In this network, MAXIMUM POSSIBLE microloan requests are fully funded with 0% interest (least request satisfied first) and the reserve wealth is re-distributed into the system. People can exit the network by requesting their deposited money, which they’ll receive in the next bidding when the loans are repayed.


Scheme
Every 3 months, all loan-requests in the network are collected and the maximum possible loan requests are fulfilled.
Every person who receives a loan has 3 months (until next bidding) to pay back his loan. Failure to do so will mean 4 people accountable for that person will have to bear the loan.

####Three steps to zero-interest loans:
Get validated
Deposit money
Request microloan

####Peer Pressure on the blockchain
Solidarity lending (peer pressure and mutual accountability to repaying loans) is an building block of rural microfinance. But in a pan-India digital network, this peer-pressure would be minimised. We achieve peer-pressure on a peer-to-peer network by using a novel innovative accountability solution, as described below.
A new member on the network can only be added once his Aadhar identity been physically validated by 4 pre-existing nodes on the network. If the person defaults, the four people responsibility for him are required to split his debt. This roots the digital network in physical space, and simulates the same social pressure necessary solidarity lending groups.


####Impact to Society of Solution:



Many a times, people read for long hours and yet gain little apart from false feeling of gratitude.
* Have you ever felt that you were too dizzy while reading a chapter only to later realize that haven’t actually understood the crux of it?
* Have you enjoyed easily getting away with reading assignments?
* Have you encountered a question right from the text and yet haven’t been able to answer it?

If your answer to any one or more of the above questions was yes, then you are in dire need of our app! With this simple mobile application we aim to revolutionize the education sector by providing immense help in improving one’s reading habits
With the advent of the social age, attention spans of individuals have significantly gone down. It has been observed that when people try to read for long hours, they seldom are able to grasp concepts. But having spent some time reading gives them a false sense of understanding it.
Our application (ReadEx) tackles this problem at its core, while also providing a one stop solution for all reading hardships an avid reader has always dreamt of. Move on to project description to know more.

> How App works?

<img src="https://raw.githubusercontent.com/jangidkrishna/0-loan_dapp/master/gui.png">
* ReadEx is an assisted reading application, that helps users continuously gauge their understanding of the material.
* A user can use it just like any other reading application (a pdf reader, a text reader etc)
* While you read through the material, Merlin (our intelligent chatbot) figures out your progress and crafts intelligent questions which pop up as counters at the side of your screen.
* Not only this, ReadEx also tries to be your intelligent encyclopedia. You can scan part of any interesting article and it suggests you a few topics that are closely related to it. You can go ahead and tap the suggestion box to read the same.
* It also comes along with an out of the box search engine, which when given with a search query fetches an appropriate article for the topic.
* Questions you fail to answer automatically move to the flashcards section which you can later revisit to revise concepts.
* Overall, ReadEx, with the wizard Merlin, forms a one stop solution to all your reading hardships

> System Architecture

![System Architecture](https://raw.githubusercontent.com/MayankR/OpenEdAI-Hackathon/master/images/flowchart.png)

* User reads after searching some keyword or uploading document or scanning a necessaary article.
* When a reader scrolls through the content, we use the position of the scroll to estimate the approximate piece of text the user is likely to be reading and sends request to the server.
* After response from the server, questions are displayed to the user via an interactive chatbot.
* Questions answered incorrectly ended up in flashcards for future review

> Model for Question Generation

Wikitrivia question generation code for quick prototyping has been used for the application. This project uses a rule based mechanism to generate a blank in a given statement or a paragraph which  serves as our simple question. To generate the set of possible answers, WordNet(large lexical database of English in layman terms) is used.The blanked word is searched over wordnet using the NLTK library and hyponyms or hypernym of that words act as the set of all possible answers. This basically serves the purpose to find words of similar contextual meaning that fit right and complete the sentence.
