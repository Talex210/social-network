import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from '../Common/FormsControls/FormsControls'
import {required} from '../../utils/validators'
import {connect} from 'react-redux'
import {login} from '../../REDUX/authReducer'
import {Navigate} from 'react-router-dom'

import style from '../Common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Email'}
                    component={Input}
                    name={'email'}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    component={Input}
                    name={'password'}
                    validate={[required]}
                    type={'password'}
                />
            </div>
            <div>
                <Field
                    type={'checkbox'}
                    component={Input}
                    name={'rememberMe'}
                />
                Remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
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
        return <Navigate to ='/profile' />
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
