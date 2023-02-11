import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from '../../../utils/validators'
import {Textarea} from '../../Common/FormsControls/FormsControls'

import s from './MyPosts.module.css'

const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field
                        placeholder='Enter new post'
                        component={Textarea}
                        name='newPost'
                        validate={[required, maxLength10]}
                    />
                </div>
                <div className={s.buttons}>
                    <button>
                        Add Post
                    </button>
                    <span>  </span>
                    <button>
                        Remove {/*делает то же что и add =(*/}
                    </button>
                </div>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm({form: 'myPost'})(PostForm)

const MyPostForm = (props) => {
    const onSubmit = (formData) => {
        const {newPost} = formData
        props.addPost(newPost)
    }

    return (
        <div>
            <MyPostReduxForm
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default MyPostForm
