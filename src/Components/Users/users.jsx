import Paginator from '../Common/Paginator/Paginator'
import {User} from './User'

const Users = ({
                   totalUsersCount,
                   pageSize,
                   currentPage,
                   onPageChanged,
                   ...props
               }) => {

    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
            />
            {props.users.map(user =>
                <User
                    key={user.id}
                    user={user}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />
            )}
        </div>
    )
}

export default Users
