import { getAuthUserData } from "./auth-reducer.ts";

const SET_INITIAL_APP = 'SET_INITIAL_APP';


type InitialStateType = {
	initialApp: boolean
}

const initialState: InitialStateType = {
	initialApp: false
}

const appReduser = (state: InitialStateType = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SET_INITIAL_APP:
			return { ...state, initialApp: true }

		default:
			return state;
	}
}

type InitialAppSuccessActionType = {
	type: typeof SET_INITIAL_APP
}

const initialAppSuccess = (): InitialAppSuccessActionType => ({ type: SET_INITIAL_APP })

export const initializeApp = () => (dispatch: any) => {
	let promise = dispatch(getAuthUserData())
	promise.then(() => {
		dispatch(initialAppSuccess())
	})


}



export default appReduser;