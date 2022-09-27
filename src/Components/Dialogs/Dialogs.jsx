import s from './Dialogs.module.css'
import React from 'react'
import DialogsItems from './DialogsItems/DialogsItems'
import Message from './Message/Message'
import {Navigate} from 'react-router-dom'

const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogsData.map((d, i) => (
        <DialogsItems key={i} name={d.name} id={d.id}
                      avatarSrc={d.avatarSrc} avatarAlt={d.avatarAlt}/>));

    let messageElements = props.dialogsPage.messagesData.map((m, i) => (
        <Message key={i}
                 text={m.message} id={m.id}/>));

    let newMessage = React.createRef();

    let updateMessageChange = () => {
        let text = newMessage.current.value;
        props.messageChange(text);
    }

    if (!props.isAuth) return <Navigate to = '/login' />

    return (
        <div className={s.dialogs}>
            <div>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <textarea placeholder='Enter new message'
                        ref={newMessage} value={props.dialogsPage.messageText} onChange={updateMessageChange}/>
                </div>
                <div>
                    <button onClick={props.sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
