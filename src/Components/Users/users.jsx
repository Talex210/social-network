import s from './Users.module.css'
import noAvatar from '../../assets/img/NoAvatar.png'
import {NavLink} from 'react-router-dom'
import {API} from '../../api/api'

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
                                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {
                                                props.toggleFollowingIsProgress(true, u.id)
                                                API.deleteFollow(u.id).then(data => {
                                                    if (data.resultCode === 0) {
                                                        props.unfollow(u.id)
                                                    }
                                                    props.toggleFollowingIsProgress(false, u.id)
                                                })
                                            }}>Unfollow</button>
                                    :
                                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {
                                                props.toggleFollowingIsProgress(true, u.id)
                                                API.postFollow(u.id).then(data => {
                                                    if (data.resultCode === 0) {
                                                        props.follow(u.id)
                                                    }
                                                    props.toggleFollowingIsProgress(false, u.id)
                                                })
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
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users
