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
        const userId = this.props.match.params.userId
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
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
)(ProfileContainer)
