import ProfileInfo from './My_Posts/Profile_Info/ProfileInfo'
import MyPostsContainer from './My_Posts/MyPostsContainer'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile
