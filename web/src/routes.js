import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Register}/>
                <Route path="/login" exact component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}