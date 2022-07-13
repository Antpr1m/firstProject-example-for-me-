import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
	posts: [
		{ id: 1, message: 'Hi! How are you?', likesCount: 11 },
		{ id: 2, message: "It's my first post", likesCount: 12 },
		{ id: 3, message: "I'm Lenochka-beauty kitty", likesCount: 88 },
	],
	newPostText: '',
	profile: null,
	status: ""
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 4,
				message: state.newPostText,
				likesCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			}
		//stateCopy.posts.push(newPost);
		//stateCopy.newPostText = '';
		case UPDATE_NEW_POST_TEXT:
			return {
				...state, newPostText: action.newText
			}
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile }
		case SET_STATUS:
			return { ...state, status: action.status }
		default:
			return state;
	}
}

export const addPostCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const updatePostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfile = (userId) => (dispatch) => {
	profileAPI.getProfile(userId)
		.then(response => {
			dispatch(setUserProfile(response.data));
		})

}

export const getStatus = (userId) => (dispatch) => {  //thunk с запросом статуса на сервер и его отправка в state
	profileAPI.getStatus(userId)
		.then(response => {
			dispatch(setStatus(response.data));
		})

}
export const updateStatus = (status) => (dispatch) => {  //Обновление статуса(отправка его на сервер) с его последующей отправкой(dispatch) в state
	profileAPI.updateStatus(status)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setStatus(status));     //Отправка в state
			}
		})

}


export default profileReducer;