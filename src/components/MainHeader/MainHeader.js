
import React from 'react'
import classes from './MainHeader.module.css'
import Navigation from './Navigation'

const MainHeader = (props) => {
   
    return (
        <header className={classes[`main-header`]}>       
            <h1>Login here</h1>
            <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
        </header>
    )
}

export default MainHeader


