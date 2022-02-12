// import s from './Profile.module.css';
import ProfileInfo from "./My_Posts/Profile_Info/ProfileInfo";
import MyPostsContainer from "./My_Posts/MyPostsContainer";

const Profile = () => {
    return (
        <div>
            <ProfileInfo description='ava + description'/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
