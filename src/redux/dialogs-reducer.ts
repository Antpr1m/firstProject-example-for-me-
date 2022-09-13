const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
	id: number,
	name: string
}
type MessageType = {
	id: number,
	message: string
}

let initialState = {
	dialogs: [
		{ id: 1, name: 'Seva' },
		{ id: 2, name: 'Anton' },
		{ id: 3, name: 'Lena' },
		{ id: 4, name: 'Lisa' },
		{ id: 5, name: 'Sergey' },
		{ id: 6, name: 'Roma' },
		{ id: 7, name: 'Masha' },
		{ id: 8, name: 'Sasha' },
	] as Array<DialogType>,
	messages: [
		{ id: 1, message: 'Hi!' },
		{ id: 2, message: "What's your name?" },
		{ id: 3, message: 'Mau-mau!!!' },
		{ id: 4, message: 'Yo!Yo!Yo!' },
		{ id: 5, message: 'Mau-mau-mau!!!' },
	] as Array<MessageType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = action.newMessageBody;
			return {
				...state,
				messages: [...state.messages, { id: 6, message: newMessage }]
			}
		default:
			return state;
	}

}

type sendMessageCreatorActionType = {
	type: typeof SEND_MESSAGE,
	newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): sendMessageCreatorActionType => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;