import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getUserProfile} from '../../REDUX/profileReducer'
import {useParams, useLocation, useNavigate} from 'react-router-dom'
// import {withAuthRedirect} from '../../hoc/withAuthRedirect'
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
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
