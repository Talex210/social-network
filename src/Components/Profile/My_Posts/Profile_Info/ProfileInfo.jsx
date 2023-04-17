import s from './ProfileInfo.module.css'
import Preloader from '../../../Common/Preloader/Preloader'
import checkMarkTrue from '../../../../assets/img/checkMarkTrue.jpg'
import checkMarkFalse from '../../../../assets/img/checkMarkFalse.jpg'
import NoAvatar from '../../../../assets/img/NoAvatar.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.photoUser}>
                    <img
                        alt='profile_photo'
                        src={profile.photos.large != null ? profile.photos.large : NoAvatar}
                    />
                </div>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
                <div>Имя пользователя: {profile.fullName}</div>
                <div className={s.aboutMe}>
                    Обо мне: {profile.aboutMe}
                </div>
                <div className={s.contactsAll}>
                    <div className={s.contacts}>Контакты:</div>
                    <div>Facebook: {profile.contacts.facebook}</div>
                    <div>VK: {profile.contacts.vk}</div>
                    <div>Website: {profile.contacts.website}</div>
                    <div>Twitter: {profile.contacts.twitter}</div>
                    <div>Instagram: {profile.contacts.instagram}</div>
                    <div>Youtube: {profile.contacts.youtube}</div>
                    <div>Github: {profile.contacts.github}</div>
                    <div>MainLink: {profile.contacts.mainLink}</div>
                </div>
                <div className={s.lookingForAJob}>
                    <div>Ищет работу?</div>
                    <img alt='true or false' src={profile.lookingForAJob ? checkMarkTrue : checkMarkFalse}/>
                    <div>Описание: {profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
