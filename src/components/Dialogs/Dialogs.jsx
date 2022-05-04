import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import React from "react";
import {sendMessageCreator, updateBodyTextCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)


    let addMessage = () => {
        props.dispatch(sendMessageCreator());
    }

    let updateNewText = (e) => {
        let text = e.target.value;
        props.dispatch(updateBodyTextCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={updateNewText} value={props.newMessageText}
                              placeholder={"Enter your message"}/>
                </div>
                <div>
                    <button onClick={addMessage}>Send Message</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;