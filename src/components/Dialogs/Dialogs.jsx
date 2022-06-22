import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage;


    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageText = state.newMessageText;

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onUpdateNewText = (e) => {
        let text = e.target.value;
        props.updateNewText(text);
    }

/*    if(!props.isAuth) return <Navigate to={'/login'}/>*/


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onUpdateNewText} value={newMessageText}
                              placeholder={"Enter your message"}/>
                </div>
                <div>
                    <button onClick={onSendMessage}>Send Message</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;