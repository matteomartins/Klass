import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Drag from './pages/Drag';
import FirstAccess from './pages/FirstAccess';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Header from './components/Header';
import CalendarIcon from './components/CalendarIcon';
import InfoIcon from './components/InfoIcon';
import Feedback from './pages/Feedback';
import Politics from './pages/Politics';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/access" exact component={FirstAccess} />
                <BrowserRouter>
                    <>
                        <Header/>
                        <Route path="/drag" exact component={Drag} />
                        <Route path="/profile" exact component={Profile} />
                        <Route path="/home" exact component={Home} />
                        <CalendarIcon />
                        
                        <Route path="/feedback" exact component={Feedback} />
                        <Route path="/politics" exact component={Politics} />
                        <InfoIcon />
                    </>
                </BrowserRouter>
            </Switch>
        </BrowserRouter>
    )
}