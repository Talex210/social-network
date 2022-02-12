import s from './NavBarFriends.module.css'

const NavBarFriends = (props) => {
    return (
        <div className={s.avatar_friends}>
                <img src={props.avatarSrc} alt={props.avatarAlt}/>
                {props.name}
        </div>
    )
}

export default NavBarFriends;