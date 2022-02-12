import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import {selectedLink} from "../../REDUX/Store";
import React from "react";
import NavBarFriends from "./NavBarFriends/NavBarFriends";

const NavBar = (props) => {
    let navBarElementsFriends = props.friendsAvatar.map((d, i) => (
        <NavBarFriends key={i} name={d.name} id={d.id}
                       avatarSrc={d.avatarSrc} avatarAlt={d.avatarAlt}/>));
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' className={selectedLink()}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/friends' className={selectedLink()}>Friends</NavLink>
                {navBarElementsFriends}
            </div>
            <div>
                <NavLink to='/dialogs' className={selectedLink()}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={selectedLink()}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={selectedLink()}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={selectedLink()}>Settings</NavLink>
            </div>
            <div>
                <NavLink to='/users' className={selectedLink()}>Users</NavLink>
            </div>
        </nav>);
}

export default NavBar;