import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e8abc717-65c5-4c09-bd27-dbf2ccadb3de"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const authMeAPI = {
    authMe() {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}

export const followAPI = {
    followFriend(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data)
    },
    unfollowFriend(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    setProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    }
}