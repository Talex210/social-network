const addPost = 'ADD-POST';
const setUpdateTextarea = 'SET-UPDATE-TEXTAREA';
const setUserProfileVar = 'SET-USER-PROFILE'

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likeCounter: 16, dislikeCounter: 3},
        {id: 2, message: "It's my firs post", likeCounter: 30, dislikeCounter: 4}
    ],
    postText: 'Hello World =)',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: 3, message: state.postText, likeCounter: 0, dislikeCounter: 0
                }],
                postText: ''
            }
        case setUpdateTextarea:
            return {
                ...state,
                postText: action.newText
            }
        case setUserProfileVar:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: addPost})
export const postChangeActionCreator = (text) => ({type: setUpdateTextarea, newText: text})
export const setUserProfile = (profile) => ({type: setUserProfileVar, profile})

export default profileReducer;