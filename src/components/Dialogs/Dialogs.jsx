import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
	let state = props.dialogsPage;


	let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
	let messagesElements = state.messages.map(m => <Message message={m.message} />)


	let addNewMessage = (values) => {
		props.sendMessage(values.messageText);
	}

	/*    if(!props.isAuth) return <Navigate to={'/login'}/>*/


	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogElements}
			</div>
			<div>
				{messagesElements}
			</div>
			<AddMessageFormRedux onSubmit={addNewMessage} />
		</div>

	)
}

export default Dialogs;

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={s.messages}>

			<div>
				<Field component='textarea' name={'messageText'}
					placeholder={"Enter your message"} />
			</div>
			<div>
				<button>Send Message</button>
			</div>
		</form>
	)
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessage' })(AddMessageForm)