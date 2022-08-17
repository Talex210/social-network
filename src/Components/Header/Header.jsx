import s from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt='logo'
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:
                 ANd9GcT4_k9P-oMNKAha6LZm-SIbpb8zxKDPzKRn4g&usqp=CAU'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'} className={s.loginBlock}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header
