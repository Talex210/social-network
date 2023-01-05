import s from './ProfileInfo.module.css'
import Preloader from '../../../Common/Preloader/Preloader'
import checkMarkTrue from '../../../../assets/img/checkMarkTrue.jpg'
import checkMarkFalse from '../../../../assets/img/checkMarkFalse.jpg'
import NoAvatar from '../../../../assets/img/NoAvatar.png'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.photoUser}>
                    <img alt='profile_photo'
                         src={props.profile.photos.large != null ? props.profile.photos.large : NoAvatar}/>
                </div>
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
                <div>Имя пользователя: {props.profile.fullName}</div>
                <div className={s.aboutMe}>Обо мне: {props.profile.aboutMe}</div>
                <div className={s.contactsAll}>
                    <div className={s.contacts}>Контакты:</div>
                    <div>Facebook: {props.profile.contacts.facebook}</div>
                    <div>VK: {props.profile.contacts.vk}</div>
                    <div>Website: {props.profile.contacts.website}</div>
                    <div>Twitter: {props.profile.contacts.twitter}</div>
                    <div>Instagram: {props.profile.contacts.instagram}</div>
                    <div>Youtube: {props.profile.contacts.youtube}</div>
                    <div>Github: {props.profile.contacts.github}</div>
                    <div>MainLink: {props.profile.contacts.mainLink}</div>
                </div>
                <div className={s.lookingForAJob}>
                    <div>Ищет работу?</div>
                    <img alt='true or false' src={props.profile.lookingForAJob ? checkMarkTrue : checkMarkFalse}/>
                    <div>Описание: {props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
