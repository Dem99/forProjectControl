import React, { useContext } from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import logotip from './../../assets/images/main-logo.png';
import './TaskPage.css';
const Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext)
    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    } 
    return(
        <nav className="nav">
            <div className="nav-body">
            <NavLink to='/mytaskpage' className="brand-logo"><img src={logotip} alt="logo"/></NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/mytaskpage">taskpage</NavLink></li>
                <li><NavLink to="/myaccaunt">accaunt</NavLink></li>
                <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;