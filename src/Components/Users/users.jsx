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
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                portionSize={10}
            />
            {props.users.map((user, index) =>
                <User
                    key={user.id}
                    user={user}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                    userNumber={index + 1}
                />
            )}
        </div>
    )
}

export default Users
