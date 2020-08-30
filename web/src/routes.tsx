import React from 'react';
import { BrowserRouter, Route, Switch, RouteProps } from 'react-router-dom';

import InfoIcon from './components/InfoIcon';
import CalendarIcon from './components/CalendarIcon';
import Header from './components/Header';

import Register from './pages/Register';
import Login from './pages/Login';
import Drag from './pages/Drag';
import FirstAccess from './pages/FirstAccess';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Feedback from './pages/Feedback';
import Politics from './pages/Politics';
import Help from './pages/Help';
import Premium from './pages/Premium';
import School from './pages/School';
import Notifications from './components/Notifications';


const RouteWithCalendar:React.FC<RouteProps> = ({...props}) => {
    return (
        <>
            <Header/>
            <div className="main-container">
                <Route { ...props } />
            </div>
            <CalendarIcon />
        </>
    )
}

const RouteWithInfo:React.FC<RouteProps> = ({...props}) => {
    return (
        <>
            <Header/>
            <div className="main-container">
                <Route { ...props } />
            </div>
            <InfoIcon />
        </>
    )
}

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/access" exact component={FirstAccess} />
                <RouteWithCalendar path="/drag" exact component={Drag} />
                <RouteWithCalendar path="/profile" exact component={Profile} />
                <RouteWithCalendar path="/home" exact component={Home} />
                <RouteWithCalendar path="/feedback" exact component={Feedback} />
                <RouteWithCalendar path="/help" exact component={Help}/>
                <RouteWithCalendar path="/premium" exact component={Premium}/>
                <RouteWithCalendar path="/notifications" exact component={Notifications}/>
                <RouteWithInfo path="/feedback" exact component={Feedback} />
                <RouteWithInfo path="/politics" exact component={Politics} />
                <RouteWithInfo path="/school" exact component={School} />
            </Switch>
        </BrowserRouter>
    )
}