import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Drag from './pages/Drag';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/drag" exact component={Drag} />
        </BrowserRouter>
    )
}