import React from 'react'
import {Field, reduxForm} from 'redux-form'

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field
                        placeholder='Enter new message'
                        component='textarea'
                        name='newMessage'
                    />
                </div>
                <div>
                    <button>
                        Send message
                    </button>
                </div>
            </div>
        </form>
    )
}

const MyMessageReduxForm = reduxForm({form: 'addNewMessage'})(NewMessageForm)

const MessageForm = (props) => {
    const onSubmit = (formData) => {
        let {newMessage} = formData
        props.sendMessage(newMessage)
    }

    return (
        <div>
            <MyMessageReduxForm
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default MessageForm
