import {connect} from 'react-redux'
import {
    follow,
    requestUsers,
    unfollow,
} from '../../REDUX/usersReducer'
import React from 'react'
import Users from './users'
import Preloader from '../Common/Preloader/Preloader'
import {compose} from 'redux'
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from '../../REDUX/usersSelectors'

class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props

        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props

        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        const {
            isFetching,
            totalUsersCount,
            pageSize,
            currentPage,
            users,
            unfollow,
            follow,
            followingInProgress,
        } = this.props

        return (
            <>
                {isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    users={users}
                    unfollow={unfollow}
                    follow={follow}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={followingInProgress}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    (connect(mapStateToProps, {
        follow,
        unfollow,
        requestUsers,
    })),
)(UsersContainer)
