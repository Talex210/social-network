import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '64b6187c-8777-4060-903b-cdeef0af0a82'
    },
})

export const API = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
                return response.data
            }
        )
    },
    getAuthMe() {
        return instance.get(`auth/me`).then(response => {
                return response.data
            }
        )
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => {
                return response.data
            }
        )
    },
    logout() {
        return instance.delete(`auth/login`).then(response => {
                return response.data
            }
        )
    },
    security() {
        return instance.get(`security/get-captcha-url`).then(response => {
                return response.data
            }
        )
    },
    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
                return response.data
            }
        )
    },
    postFollow(userId) {
        return instance.post(`follow/${userId}`, {}).then(response => {
                return response.data
            }
        )
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
                return response.data
            }
        )
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => {
                return response.data
            }
        )
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response => {
                return response.data
            }
        )
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(response => {
                return response.data
            }
        )
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile).then(response => {
                return response.data
            }
        )
    },
}

/*export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        }
    )
}*/

/*export const getAuthMe = () => {
    return instance.get(`auth/me`).then(response => {
            return response.data
        }
    )
}*/

/*export const deleteFollow = (userId) => {
    return instance.delete(`follow/${userId}`).then(response => {
            return response.data
        }
    )
}*/

/*export const postFollow = (userId) => {
    return instance.post(`follow/${userId}`, {}).then(response => {
            return response.data
        }
    )
}*/





