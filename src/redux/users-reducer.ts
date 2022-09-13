import { PhotosType, UserType } from './../types/types';
import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

type InitialStateType = typeof initialState

let initialState = {
	users: [] as Array<UserType>,
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [] as Array<number>  //array of users ids
}

const usersReducer = (state = initialState, action: any): InitialStateType => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u;
				})
			}
		case SET_USERS:
			return { ...state, users: action.users }
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage }
		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalUsersCount: action.totalCount }
		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching }
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id != action.userId)
			}
		default:
			return state;
	}
}

type FollowSuccessActionType = {
	type: typeof FOLLOW,
	userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId })

type UnfollowSuccessActionType = {
	type: typeof UNFOLLOW,
	userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({ type: UNFOLLOW, userId })

type setUsersActionType = {
	type: typeof SET_USERS,
	users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): setUsersActionType => ({ type: SET_USERS, users })

type setCurrentPageActionType = {
	type: typeof SET_CURRENT_PAGE,
	currentPage: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage })

type setUsersTotalCountActionType = {
	type: typeof SET_TOTAL_USERS_COUNT,
	totalCount: number
}
export const setUsersTotalCount = (totalCount: number): setUsersTotalCountActionType => ({ type: SET_TOTAL_USERS_COUNT, totalCount })

type toggleIsFetchingActionType = {
	type: typeof TOGGLE_IS_FETCHING,
	isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching })

type toggleFollowingProgressActionType = {
	type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching: boolean,
	userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	userId
})

export const getUsers = (currentPage: number, pageSize: number) => {
	return (dispatch: any) => {
		dispatch(toggleIsFetching(true));
		usersAPI.getUsers(currentPage, pageSize)
			.then(data => {
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(data.items));
				dispatch(setUsersTotalCount(data.totalCount));
			})
	}
}

export const unfollow = (userId: number) => {
	return (dispatch: any) => {
		dispatch(toggleFollowingProgress(true, userId))
		usersAPI.unfollow(userId)
			.then(data => {
				if (data.resultCode == 0) {
					dispatch(unfollowSuccess(userId))
				}
				dispatch(toggleFollowingProgress(false, userId))
			})
	}
}

export const follow = (userId: number) => {
	return (dispatch: any) => {
		dispatch(toggleFollowingProgress(true, userId))
		usersAPI.follow(userId)
			.then(data => {
				if (data.resultCode == 0) {
					dispatch(followSuccess(userId))
				}
				dispatch(toggleFollowingProgress(false, userId))
			})
	}
}
export default usersReducer;