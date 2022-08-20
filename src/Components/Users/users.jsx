import s from './Users.module.css'
import noAvatar from '../../assets/img/NoAvatar.png'
import {NavLink} from 'react-router-dom'
import * as axios from 'axios'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let usersNumber = 1

    return (
        <div>
            <div>
                {pages.map((p, i) =>
                    <span className={props.currentPage === p ? s.selectPage : s.selectPageOff}
                          onClick={() => {
                              props.onPageChanged(p)
                          }}
                          key={i}>
                            {p}_
                        </span>
                )}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div className={s.avatar}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img alt='1' src={u.photos.large != null ? u.photos.large : noAvatar}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': '64b6187c-8777-4060-903b-cdeef0af0a82'
                                                },
                                            }
                                        )
                                            .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(u.id)
                                                    }
                                                }
                                            )

                                    }}>Unfollow</button>
                                    :
                                    <button onClick={() => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': '64b6187c-8777-4060-903b-cdeef0af0a82'
                                                },
                                            }
                                        )
                                            .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(u.id)
                                                    }
                                                }
                                            )

                                    }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>
                                     {usersNumber++}. - {u.name} and id = {u.id}
                                </div>
                                <div>
                                    {u.status}
                                </div>
                            </span>
                            <span>
                                {/*<div>{u.location.country}</div>
                                <div>{u.location.city}</div>*/}
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users
