import ProfileInfo from './My_Posts/Profile_Info/ProfileInfo'
import MyPostsContainer from './My_Posts/MyPostsContainer'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile
