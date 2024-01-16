import { API } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null,
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

export const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: {
        userId: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean,
    },
}

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl: string },
}

export const setAuthUserData =
    (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType =>
        ({
            type: SET_USER_DATA,
            payload: {userId, email, login, isAuth}
        })

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

export const getAuthUserData = () => async (dispatch: any) => {
    const data = await API.getAuthMe()

    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const data = await API.login(email, password, rememberMe, captcha)

    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {

        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }

        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const data = await API.security()
    const captchaUrl = data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
    const data = await API.logout()

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
