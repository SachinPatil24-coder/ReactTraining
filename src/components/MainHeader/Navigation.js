import React from 'react'
import classes from './Navigation.module.css';


const Navigation = (props) => {
    return (
        <ul className={classes.nav}>
            <ul>
                {props.isLoggedIn && (
                    <li>
                        <a href='/'>Users</a>
                        
                    </li>
                )}
                {/* {props.isLoggedIn && (
                    <li>
                        <a href='/'></a>
                    </li>
                )} */}
                {props.isLoggedIn && (
                    <li>
                        <button onClick={props.onLogout}>Logout</button>
                    </li>
                )}




            </ul>



        </ul>
    )
}

export default Navigation
