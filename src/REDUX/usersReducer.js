const followVar = 'FOLLOW';
const unfollowVar = 'UNFOLLOW';
const setUsersVar = 'SET-USERS';
const setCurrentPageVar = 'SET-CURRENT-PAGE';
const setUsersCountVar = 'SET-USERS-COUNT';
const toggleIsFetchingVar = 'TOGGLE-IS-FETCHING';

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
        case followVar:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case unfollowVar:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case setUsersVar:
            return {
                ...state,
                users: action.users
            }
        case setCurrentPageVar:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case setUsersCountVar:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case toggleIsFetchingVar:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const follow = (userID) => ({type: followVar, userID});
export const unfollow = (userID) => ({type: unfollowVar, userID});
export const setUsers = (users) => ({type: setUsersVar, users});
export const setCurrentPage = (currentPage) => ({type: setCurrentPageVar, currentPage});
export const setUsersCount = (totalUsersCount) => ({type: setUsersCountVar, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: toggleIsFetchingVar, isFetching});

export default usersReducer;
