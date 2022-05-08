# HapticDao

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

