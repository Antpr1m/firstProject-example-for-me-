import {sendMessageCreator, updateMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {dialogsPage: state.dialogsPage, isAuth: state.auth.isAuth}
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => dispatch(sendMessageCreator()),
        updateNewText: (text) => dispatch(updateMessageTextCreator(text))
    }
}

let authNavigateComponent = withAuthRedirect(Dialogs);//HOC use

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authNavigateComponent);

export default DialogsContainer;