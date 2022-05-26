# HapticDao



# Instructions For Judging for Chainlink Hackathon 2022

1) Clone the repository and cd into hapticdao/hapticreact, then just like any othe react project: 
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
     a) link
     b) bitcoin
     c) ethereum 
     d) augur
     e) ripple 
     ...etc 


## Running The Application 
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
