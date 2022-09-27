import {messageChangeActionCreator, sendMessageActionCreator} from '../../REDUX/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        messageChange: (text) => {
            dispatch(messageChangeActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
