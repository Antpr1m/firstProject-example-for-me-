import {sendMessageCreator, updateMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogPage;

    let addMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let updateNewText = (text) => {
        props.store.dispatch(updateMessageTextCreator(text));
    }

    return (
        <Dialogs sendMessage={addMessage}
                 updateNewText={updateNewText}
                 dialogsPage={state}/>
    )
}

export default DialogsContainer;