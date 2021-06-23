import React from 'react'
import { Button } from "@material-ui/core"
import "./Login.css"
import { auth, provider } from "./firebase"
import { useStateValue } from './StateProvider'
import { actionTypes } from "./reducer"


function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(e => alert(e.message));
    };
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" />
                
                <div className="login_txt">
                    <h1>Sign in to ClatsApp</h1>
                </div>

                <Button type="submit" onClick={signIn}>Sign in with Google</Button>

            </div>
        </div>
    )
}

export default Login
