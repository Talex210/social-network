import ProfileInfo from "./My_Posts/Profile_Info/ProfileInfo";
import MyPostsContainer from "./My_Posts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo description='ava + description' profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
