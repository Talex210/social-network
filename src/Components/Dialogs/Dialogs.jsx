import React from 'react'
import {Navigate} from 'react-router-dom'
import DialogsItems from './DialogsItems/DialogsItems'
import Message from './Message/Message'
import MessageForm from './MessageForm'

import s from './Dialogs.module.css'

const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogsData.map((d, i) => (
        <DialogsItems key={i} name={d.name} id={d.id}
                      avatarSrc={d.avatarSrc} avatarAlt={d.avatarAlt}/>))

    let messageElements = props.dialogsPage.messagesData.map((m, i) => (
        <Message key={i}
                 text={m.message} id={m.id}/>))

    if (!props.isAuth) return <Navigate to='/login'/>

    return (
        <div className={s.dialogs}>
            <div>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <MessageForm {...props}/>
            </div>
        </div>
    )
}

export default Dialogs
