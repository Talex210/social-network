const follow = 'FOLLOW';
const unfollow = 'UNFOLLOW';
const setUsers = 'SET-USERS';
const setCurrentPage = 'SET-CURRENT-PAGE';
const setUsersCount ='SET-USERS-COUNT';
const toggleIsFetching = 'TOGGLE-IS-FETCHING';

let initialState = {
    users: [
        /*{
            id: 1, fullName: 'Alex', followed: true, status: 'I am a boss',
            location: {city: 'Mahmutlar', country: 'Turkey'}
        },
        {
            id: 2, fullName: 'Dimych', followed: false, status: 'I am a boss too',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3, fullName: 'Andrew', followed: true, status: 'I am a really boss',
            location: {city: 'Rostov-on-Don', country: 'Russia'}
        },
        {
            id: 4, fullName: 'Stepa', followed: false, status: 'I am not a really boss',
            location: {city: 'Moscow', country: 'Russia'}
        }*/
    ],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case follow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case unfollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case setUsers:
            return {
                ...state,
                users: action.users
            }
        case setCurrentPage:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case setUsersCount:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case toggleIsFetching:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const followAC = (userID) => ({type: follow, userID});
export const unfollowAC = (userID) => ({type: unfollow, userID});
export const setUsersAC = (users) => ({type: setUsers, users});
export const setCurrentPageAC = (currentPage) => ({type: setCurrentPage, currentPage});
export const setUsersCountAC = (totalUsersCount) => ({type: setUsersCount, totalUsersCount});
export const toggleIsFetchingAC = (isFetching) => ({type: toggleIsFetching, isFetching});

export default usersReducer;