# HapticDao



# Instructions For Judges for Chainlink Hackathon 2022:

1) Clone the repository and cd into hapticdao/hapticreact, then just like any other react project: 
    ```
    $ npm install
    
    $ npm run start
    ```
2) Make sure you have metamask in your browser, otherwise some pages will not appear.
3) ### Dashboard 
    We are using Rinkeby chanlink price feeds. Make sure your metamask chain is rinkeby. 
    There is a limited offering of tokens on rinkeby, and from that offering we chose the most popular ones for now. 
    
    Verbal Commands: 
    1) get wallet balance 
    2) get the price of * 
    
    <br/>
     a) link
     b) bitcoin
     c) ethereum 
     d) augur
     e) ripple 
     ...etc 
     
4) ### DAO 
   DAO is pretty straightforward. You can add or vote on proposals. You will see cards be added to the page once the transaction is complete so refresh the    page. Voting or Adding proposals will charge 0.01 ether on Rinkeby network. Make sure you are connected to Rinkeby network! 
 
5) ### Truflation 
   Can view latest inflation data. Our keeper that runs a 5 minute sync can be found here: https://keepers.chain.link/rinkeby/568
   If you need our team to fund the keeper, please let us know. 

6) ### DEX
   You will be automatically prompted to switch to matic mainnet. Moralis OneInch plugin requires mainnet to be used. We have elected to use solely polygon    mainnet for now. OneInch has a limited number of token addresses it supports on each network. Once again we selected the most popular from that limited    list for this iteration.
   
   Verbal Commands 
   1) quote * of * to * 
   <br/>
      Ex: quote 5 of matic to dai 
         <br/>
      Ex: quote 10 of chainlink to sushi
         <br/>
      Ex: quote 20 of Aave to frax
         <br/><br/><br/>
   
   2) swap * of * to * 
   <br/>
      Ex: swap 5 of matic to dai 
         <br/>
      Ex: swap 10 of dai to link 
         <br/>
      Ex: swap 3 of Aave to sushi 
   <br/>
   
<i>Please note that it is probably better to use smaller amounts of currency as this is on matic mainnet and costs real money. 
   In the console tooling you can view that addresses and verbal transcripts are picked up properly. If you receive a 400 in the request to OneInch 
   (in the console) it is most likely due to insufficient funds. Navigate to the network tab and select that request to see proof of this.</i>
      <br/><br/>
      
   For Uniswap: we did not add any special functionality here. It is literally just uniswap.
  

## Running The Application To Include Python backend
<br/>

<i>Note: This portion of the instructions is for our team. Not intended for hackathon but for future use cases.</i>

<br/>

1) If anything on frontend has changed, cd into hapticreact and first run: 
    
    ```
    $ npm run build
    ```
2) To run the application itself cd into hapticdjango and run: 
    ```
    python3 manage.py runserver
    ```
3) To test vibrations on mobile device:
    i) Determine IP address of machine you are running the app on
    ii) Grab the port you are running the react app on
    iii) On your mobile browser: search <IP_ADDRESS>:<PORT>

<br/>

<i> Please Note that you must have a metamask wallet for certain pages to appear.
    Otherwise you will only see a blank page.</i>
