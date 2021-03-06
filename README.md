# HapticDao

![home](https://user-images.githubusercontent.com/17859699/170548909-0bea2c73-3181-4d37-9486-2a2401f4d01a.png)


# Instructions For Judges for Chainlink Hackathon 2022:

1) We are hosting the react application via Moralis: https://hlwxa0g0qo9f.usemoralis.com/ --> Can test running application here :)
   If you encounter any issues please let us know. Dashboard, DAO, and Truflation require you to be on Rinkeby network. 

   Alternatively, you may clone the repository and cd into hapticdao/hapticreact, then just like any other react project: 
    ```
    $ npm install
    
    $ npm run start
    ```
2) <b>IMPORTANT!!!!!!!! Make sure you have metamask in your browser, otherwise some pages will not appear! 
      Dashboard, DAO, and Truflation use Rinkeby network. DEX uses Polygon mainnet, but will prompt users to switch chains automatically 
      if they forget to switch from Rinkeby. Also make sure to login with the login button on our UI, we use Moralis to authenticate individual's
      Metamask</b>

3) ### Dashboard <br><br> ![dashboard](https://user-images.githubusercontent.com/17859699/170549081-42823fd9-8647-4ae0-b51f-908b39d5ed0b.png)
 
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
 <br>
     
4) ### DAO <br><br> ![dao](https://user-images.githubusercontent.com/17859699/170549545-687e8524-3e53-4af0-a745-213b0435e815.png)

   DAO is pretty straightforward. You can add or vote on proposals. You will see cards be added to the page once the transaction is complete so refresh      the page. Voting or Adding proposals will charge 0.01 ether on Rinkeby network. Make sure you are connected to Rinkeby network! 
 <br>
 
5) ### Truflation <br><br> ![truflation](https://user-images.githubusercontent.com/17859699/170549661-0997e85a-0a5b-49fd-b10e-801a8ace70e5.png)

   Can view latest inflation data. Our keeper that runs a 5 minute sync can be found here: https://keepers.chain.link/rinkeby/568
   If you need our team to fund the keeper, please let us know. 
 <br>

6) ### DEX <br> <br> ![dex](https://user-images.githubusercontent.com/17859699/170549720-bddee50d-3543-4769-b472-d08093ac5e2b.png)

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
 
 # LINKS 
 
 Rinkeby Etherscan 
 <br/>
 Truflation yoycontract we deployed: https://rinkeby.etherscan.io/address/0xA6D660d289509803FD16D478C5ae8Ef95cCE30BD 
 <br/>
 
 DAO Contract:
 https://rinkeby.etherscan.io/address/0x49bf054e5dc02998ecd4c31f94cab38821c5983f#readContract
 <br/>
 
 Truflation Keepers Contract for Categories: 
 https://rinkeby.etherscan.io/address/0xaE02354d16019b1A6dA8c2E184Fe9903cEacD785#writeContract
 <br/>

<i>Please note for the keepers contract we were instructed by Truflation team to use placeholder functions until they make the API available.</i>

 # Final Notes: 
 
 For any questions or concerns please reach out to me or our team on devpost: https://devpost.com/software/hapticdao
   ---------------------------------------------------------------------

 Or at our email: haptcdao@gmail.com
  ---------------------------------------------------------------------

 <br/> <br/> <br/>
 

## Running The Application To Include Python backend -> NOT HACKATHON RELATED
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
   <br/>
    i) Determine IP address of machine you are running the app on
       <br/>
    ii) Grab the port you are running the react app on
       <br/>
    iii) On your mobile browser: search <IP_ADDRESS>:<PORT>
      <br/>

<br/>

<i> Please Note that you must have a metamask wallet for certain pages to appear.
    Otherwise you will only see a blank page.</i>
