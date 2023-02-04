import {API} from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

// export const setLoginData // связано с api, так же не сделано чтобы работало

export const getAuthUserData = () => {
    return (dispatch) => {
        API.getAuthMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}

/*export const postLoginData = (userData) => { // связано с api, так же не сделано чтобы работало
    return (dispatch) => {
        API.postLogin(userData).then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}*/

export default authReducer
