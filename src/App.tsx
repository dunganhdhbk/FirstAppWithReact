import React from 'react';
import './App.css';
import MyButton from './MyButton/MyButton'
import AboutPage from "./AboutPage/AboutPage";
import Profile from "./Profile/Profile";
import LoginForm from "./LoginForm/LoginForm";
import ActiveUserList from "./ActiveUserList/ActiveUserList";

let isLoggedIn = false;

function App() {

    return (
        <div className="App">
            {
                !isLoggedIn ? (
                    <LoginForm/>
                ) : (
                    <ActiveUserList/>
                )
            }
        </div>
    );
}

export default App;
