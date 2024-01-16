import { applyMiddleware, combineReducers, createStore } from 'redux'
import { profileReducer } from './profileReducer.ts'
import dialogsReducer from './dialogsReducer'
import usersReducer from './usersReducer'
import { authReducer }  from './authReducer.ts'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { appReducer }  from './appReducer.ts'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.___store___ = store

export default store
