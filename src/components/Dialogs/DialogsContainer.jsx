import {sendMessageCreator, updateMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {dialogsPage: state.dialogsPage}
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => dispatch(sendMessageCreator()),
        updateNewText: (text) => dispatch(updateMessageTextCreator(text))
    }
}

let authNavigateComponent = withAuthRedirect(Dialogs);//using a HOC

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authNavigateComponent);

export default DialogsContainer;