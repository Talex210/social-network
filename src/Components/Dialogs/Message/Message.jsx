import s from '../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={props.id % 2 > 0 ? s.messageLeft : s.messageRight}>
            {props.text}
        </div>
    );
}

export default Message;