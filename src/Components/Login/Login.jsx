import React from 'react'
import {reduxForm} from 'redux-form'
import {creatField, Input} from '../Common/FormsControls/FormsControls'
import {required} from '../../utils/validators'
import {connect} from 'react-redux'
import {login} from '../../REDUX/authReducer'
import {Navigate} from 'react-router-dom'

import style from '../Common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {creatField(
                'Email',
                Input,
                'email',
                [required],
            )}
            {creatField(
                'Password',
                Input,
                'password',
                [required],
                {type: 'password'},
            )}
            {creatField(
                null,
                Input,
                'rememberMe',
                [],
                {type: 'checkbox'},
                'Remember me'
            )}
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to='/profile'/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm
                onSubmit={onSubmit}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login)
