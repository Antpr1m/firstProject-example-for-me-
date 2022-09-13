import { PostType, ProfileType } from './../types/types';
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


export type InitialStateType = typeof initialState

let initialState = {
	posts: [
		{ id: 1, message: 'Hi! How are you?', likesCount: 11 },
		{ id: 2, message: "It's my first post", likesCount: 12 },
		{ id: 3, message: "I'm Lenochka-beauty kitty", likesCount: 88 },
	] as Array<PostType>,
	profile: null as ProfileType | null,
	status: ""
}

const profileReducer = (state = initialState, action: any): InitialStateType => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 4,
				message: action.newPostBody,
				likesCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost],
			}
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile }
		case SET_STATUS:
			return { ...state, status: action.status }
		default:
			return state;
	}
}

//types of actionCreators
type AddPostCreatorActionType = {
	type: typeof ADD_POST,
	newPostBody: string
}
type SetUserProfileActonType = {
	type: typeof SET_USER_PROFILE,
	profile: ProfileType
}
type SetStatusActionType = {
	type: typeof SET_STATUS,
	status: string
}

export const addPostCreator = (newPostBody: string): AddPostCreatorActionType => ({ type: ADD_POST, newPostBody })
export const setUserProfile = (profile: ProfileType): SetUserProfileActonType => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status })

export const getProfile = (userId: number) => (dispatch: any) => {
	profileAPI.getProfile(userId)
		.then(response => {
			dispatch(setUserProfile(response.data));
		})

}

export const getStatus = (userId: number) => (dispatch: any) => {  //thunk с запросом статуса на сервер и его отправка в state
	profileAPI.getStatus(userId)
		.then(response => {
			dispatch(setStatus(response.data));
		})

}
export const updateStatus = (status: string) => (dispatch: any) => {  //Обновление статуса(отправка его на сервер) с его последующей отправкой(dispatch) в state
	profileAPI.updateStatus(status)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setStatus(status));     //Отправка в state
			}
		})

}


export default profileReducer;