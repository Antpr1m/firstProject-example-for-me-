import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


export type InitialStateType = typeof initialState

let initialState = {
	id: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false
}

const authReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			}
		default:
			return state;
	}
}

type SetAuthUserDataActionPayloadType = {
	id: number | null,
	email: string | null,
	login: string | null,
	isAuth: boolean
}

type SetAuthUserDataActionType = {
	type: typeof SET_USER_DATA,
	payload: SetAuthUserDataActionPayloadType

}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
	type: SET_USER_DATA,
	payload: { id, email, login, isAuth }
})

export const getAuthUserData = () => (dispatch: any) => {
	return authAPI.authMe()
		.then(data => {
			if (data.resultCode === 0) {
				let { id, email, login } = data.data;
				dispatch(setAuthUserData(id, email, login, true));
			}
		})
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
	authAPI.login(email, password, rememberMe)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(getAuthUserData())
			} else {
				let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some errror"
				dispatch(stopSubmit("login", { _error: message })) //если возникла ошибка при отправке формы,'login'- имя формы, кот. нужно остановить
			}
		})
}

export const logout = () => (dispatch: any) => {
	authAPI.logout()
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setAuthUserData(null, null, null, false))
			}
		})
}

export default authReducer;