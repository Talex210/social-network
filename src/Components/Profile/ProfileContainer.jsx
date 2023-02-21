import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getUserProfile, getUserStatus, updateStatus} from '../../REDUX/profileReducer'
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

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { // как то не совсем корректно работает, при выборе пользователя переходит на мою страницу, но
            // после обновления страницы появляется нужный пользователь, это если мы поставим this.props.isAuth вместо userId
            // связано с роутингом в App.js, 21 строка
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
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
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
)(ProfileContainer)
