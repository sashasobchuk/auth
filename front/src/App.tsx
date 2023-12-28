import React, {useState} from 'react';
import classes from './App.module.css';
import Auth from "./components/auth/Auth";

function App() {
    const [greeting, setGreeting] = useState<undefined | string>()
    return (greeting
            ? <div className={classes.greeting}>{greeting}</div>
            : <Auth setGreeting={setGreeting}/>
    );
}

export default App;
