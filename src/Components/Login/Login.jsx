import React from 'react'
import {Field, reduxForm} from 'redux-form'
// import {API} from '../../api/api'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Login'}
                    component={'input'}
                    name={'login'}
                />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    component={'input'}
                    name={'password'}
                />
            </div>
            <div>
                <Field
                    type={'checkbox'}
                    component={'input'}
                    name={'rememberMe'}
                />
                Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData) // этому объекту нужно сделать post через api
        // API.postLogin(formData)
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

export default Login // логин нужно будет законектить
