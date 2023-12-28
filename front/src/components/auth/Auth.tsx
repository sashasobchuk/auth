import React, {useState} from 'react';
import classes from './auth.module.css'
import fetcher from "../../utils/fetcher/fetcher";
import { enqueueSnackbar } from "notistack";
import {AuthProps} from "./types";

const Auth:React.FC<AuthProps> = ({setGreeting}) => {

    const [name, setName] = useState<string>('')
    const [username, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [authState,setAuthState]=useState<'Registration'|'Login'>('Registration')

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const body ={
            name:name,
            username:username,
            password:password,
        }
        fetcher<any>(`auth/${authState.toLocaleLowerCase()}`,
            {method:'POST',
            body:JSON.stringify(body)}
        ).then(data=>{
            setGreeting(`hi ${data.user.name} you're logged in.`)
        }).catch(e=>{
            enqueueSnackbar(e.message,{variant:'error'})
        })
    }



    return (
        <div className={classes.loginContainer}>
            <div className={classes.loginPopUp}>
                <div className={classes.header}>
                    <div
                        onClick={()=>setAuthState('Registration')}
                        className={authState ==='Registration'?classes.activeHeader:undefined}>
                        Registration
                    </div>
                    <div
                        onClick={()=>setAuthState('Login')}
                        className={authState ==='Login'?classes.activeHeader:undefined}>
                        Login
                    </div>
                </div>
                <h2>{authState}</h2>
                <form className={classes.form} onSubmit={submitHandler}>
                    <label className={classes.label} htmlFor="username">Username:</label>
                    <input
                        onChange={e=>setUserName(e.target.value)}
                        value={username}
                        className={classes.input}
                        type="text"
                        id="username"
                        name="username"
                        required
                    />
                    <label className={classes.label} htmlFor="password">Password:</label>
                    <input
                        onChange={e=>setPassword(e.target.value)}
                        value={password}
                        className={classes.input}
                        type="text"
                        id="password"
                        name="password"
                        required
                    />
                    <label className={classes.label} htmlFor="Name">Name:</label>
                    <input
                        onChange={e=>setName(e.target.value)}
                        value={name}
                        className={classes.input}
                        type="text"
                        id="Name"
                        name="Name"
                        required
                    />
                    <button type="submit" className={classes.button}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Auth;