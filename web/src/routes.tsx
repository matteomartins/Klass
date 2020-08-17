import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Drag from './pages/Drag';
import FirstAccess from './pages/FirstAccess';
import Header from './components/Header';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/access" exact component={FirstAccess} />
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path="/drag" exact component={Drag} />
                    </div>
                </BrowserRouter>
            </Switch>
        </BrowserRouter>
    )
}