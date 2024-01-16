import { getAuthUserData } from './authReducer.ts'

const INITIALIZED_SUCCESS = 'SET_INITIALIZED'

export type InitialStateType = {
    initialized: boolean,
}

let initialState: InitialStateType = {
    initialized: false,
}

export const appReducer = (state = initialState, action: any): InitialStateType => {
    // console.log(action)
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }
}

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS,
}

export const initializedSuccess = (): InitializedSuccessActionType => ({
    type: INITIALIZED_SUCCESS
})

export const initializeApp = () => {
    return (dispatch: any) => {
        // console.log(dispatch)
        let promise = dispatch(getAuthUserData())
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        })
    }
}
