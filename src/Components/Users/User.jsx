import style from './Users.module.css'
import noAvatar from '../../assets/img/NoAvatar.png'
import {NavLink} from 'react-router-dom'

export const User = ({user, followingInProgress, unfollow, follow}) => {
    let userNumber = 1

    return (
        <div>
            <span>
                <div className={style.avatar}>
                    <NavLink to={'/profile/' + user.id}>
                        <img alt='1' src={user.photos.large != null ? user.photos.large : noAvatar}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollow(user.id)
                            }}>
                            Unfollow
                        </button>
                        : <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id)
                            }}>
                            Follow
                        </button>}
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {userNumber++}. - {user.name} and id = {user.id}
                    </div>
                    <div>
                        {user.status}
                    </div>
                </span>
            </span>
        </div>
    )
}
