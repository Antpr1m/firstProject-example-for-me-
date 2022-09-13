import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,  //разрешение на отправку с домена на домен
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "e8abc717-65c5-4c09-bd27-dbf2ccadb3de"
	}
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	follow(userId) {
		return instance.post(`follow/${userId}`, {})
			.then(response => response.data)
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => response.data)
	},
	getProfile(userId) {
		console.warn('obsolete method. Please use profileAPI')
		return profileAPI.getProfile(userId)

	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/` + userId)
	},
	getStatus(userId) {
		return instance.get(`profile/status/` + userId)
	},
	updateStatus(status) {
		return instance.put(`profile/status/`, { status: status });
	}
}

export const authAPI = {
	authMe() {
		return instance.get('auth/me')
			.then(response => response.data)
	},
	login(email, password, rememberMe = false) {
		return instance.post(`auth/login`, { email, password, rememberMe })
	},
	logout() {
		return instance.delete(`auth/login`)
	}
}

