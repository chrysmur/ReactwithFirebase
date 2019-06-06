import React from 'react'
import './index.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

import Navigation from '../Navigation'
import LandingPage from '../Landing/index'
import Home from '../Home/index'
import Account from '../Account/index'
import SignUp from '../SignUp/index'
import Admin from '../Admin/index'
import SignIn from  '../SignIn/index'

const App = () => (
    <Router>
    <div>
        <div id='header=wrapper'>
        <div id='header'>Wong Lee Recomender</div>
            <Navigation id='nav'/>
        </div>
        <hr/>
        <Route  exact path={ROUTES.LANDING} component={LandingPage}/>
        <Route path={ROUTES.HOME} component={Home}/>
        <Route path={ROUTES.ACCOUNT} component={Account}/>
        <Route path={ROUTES.ADMIN} component={Admin}/>
        <Route path={ROUTES.SIGN_UP} component ={SignUp}/>
        <Route path={ROUTES.SIGN_IN} component={SignIn}/>
    </div>
    </Router>
)
export default App
        