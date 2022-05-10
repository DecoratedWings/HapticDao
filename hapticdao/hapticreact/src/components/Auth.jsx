import React, { useEffect, useState } from 'react';
import { useMoralis } from "react-moralis";

const Auth = (props) => {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    const [button, setButton] = useState(false);
    const handleClick = () => setButton(!button);

    useEffect(() => {
        if (isAuthenticated) {
            // add your logic here
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    const login = async () => {
        if (!isAuthenticated) {

            await authenticate({ signingMessage: "Login using Moralis" })
                .then(function (user) {
                    console.log("logged in user:", user);
                    console.log(user.get("ethAddress"));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const logOut = async () => {
        await logout();
        console.log("logged out");
    }

    return (
        <div onClick={handleClick} className=''>
            {!button ? <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-5 rounded-full justify-left" onClick={login}>Login</button>
                : <button onClick={logOut} disabled={isAuthenticating} class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-5 rounded-full">Logout</button>}
        </div>
    );
}

export default Auth;