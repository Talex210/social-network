import React, {Component} from 'react'
import {connect} from 'react-redux'
import {initializeApp} from './REDUX/appReducer'
import NavBar from './Components/Nav_Bar/NavBar'
import {Routes, Route} from 'react-router-dom'
import News from './Components/News/News'
import Music from './Components/Music/Music'
import Settings from './Components/Settings/Settings'
import Friends from './Components/Friends/Friends'
import UsersContainer from './Components/Users/UsersContainer'
import HeaderContainer from './Components/Header/HeaderContainer'
import Login from './Components/Login/Login'
import Preloader from './Components/Common/Preloader/Preloader'
import {withSuspense} from './hoc/withSuspense'

import './App.css'

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        const DialogContainerWithSuspense = withSuspense(DialogsContainer)
        const ProfileContainerWithSuspense = withSuspense(ProfileContainer)

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar friendsAvatar={this.props.state.dialogsPage.dialogsData}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/:userId' element={<ProfileContainerWithSuspense/>}/>
                        <Route path='/dialogs/*' element={<DialogContainerWithSuspense/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/friends' element={<Friends/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp})(App)
