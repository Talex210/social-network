import {addPostActionCreator} from '../../../REDUX/profileReducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        postText: state.profilePage.postText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
