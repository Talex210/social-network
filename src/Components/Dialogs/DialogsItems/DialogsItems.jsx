import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {selectedLink} from "../../../REDUX/Store";

const DialogsItems = (props) => {

    return (
        <div className={s.columnName}>
            <div>
            <img src={props.avatarSrc} alt={props.avatarAlt}/>
            </div>
            <div>
            <NavLink to={`/dialogs/${props.id}`} className={selectedLink()}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogsItems;