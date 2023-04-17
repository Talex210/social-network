import {API} from '../api/api'
import {updateObjectInArray} from '../utils/objectHelper'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true}),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false}),
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}

export const followSuccess = (userID) => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersCount = (totalUsersCount) => ({type: SET_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingIsProgress = (isFetching, userID) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userID
})

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(page))

    dispatch(toggleIsFetching(true))

    const data = await API.getUsers(page, pageSize)

    dispatch(toggleIsFetching(false))

    dispatch(setUsers(data.items))

    dispatch(setUsersCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => {
    dispatch(toggleFollowingIsProgress(true, userID))

    const data = await apiMethod(userID)

    if (data.resultCode === 0) {
        dispatch(actionCreator(userID))
    }

    dispatch(toggleFollowingIsProgress(false, userID))
}

export const follow = (userID) => async (dispatch) => {
    const apiMethod = API.postFollow.bind(API)
    await followUnfollowFlow(dispatch, userID, apiMethod, followSuccess)
}

export const unfollow = (userID) => async (dispatch) => {
    const apiMethod = API.deleteFollow.bind(API)
    await followUnfollowFlow(dispatch, userID, apiMethod, unfollowSuccess)
}

export default usersReducer
