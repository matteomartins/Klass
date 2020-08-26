import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CalendarIcon from './components/CalendarIcon';
import Header from './components/Header';

import Register from './pages/Register';
import Login from './pages/Login';
import Drag from './pages/Drag';
import FirstAccess from './pages/FirstAccess';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Feedback from './pages/Feedback';


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
                        <Route path="/feedback" exact component={Feedback} />
                        <CalendarIcon />
                    </>
                </BrowserRouter>
            </Switch>
        </BrowserRouter>
    )
}