import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getUserProfile, getUserStatus, savePhoto, updateStatus} from '../../REDUX/profileReducer'
import {useParams, useLocation, useNavigate} from 'react-router-dom'
import {compose} from 'redux'

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()}
        const location = {params: useLocation()}
        const navigate = {params: useNavigate()}
        return <Children {...props} match={match} location={location} navigate={navigate}/>
    }
}

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.navigate('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
        /*let userId = this.props.match.params.userId
        // console.log(userId) // сроботавает только с Users
        // скорей всего нужно смотреть как работает из Users переход, на страничку пользователя
        // когда кликаю на профиль, должен появляться мой профиль
        // debugger
        if (!userId) { // как то не совсем корректно работает, при выборе пользователя переходит на мою страницу, но
            // после обновления страницы появляется нужный пользователь, это если мы поставим this.props.isAuth вместо userId
            // связано с роутингом в App.js, 35 строка
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.navigate('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)*/
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    isOwner={this.props.match.params.userId === '25555'}
                    savePhoto={this.props.savePhoto}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus, savePhoto}),
    withRouter,
)(ProfileContainer)
