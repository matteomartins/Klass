import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import FirstAccess from './pages/FirstAccess';

export default function Routes() {
    return (
        <BrowserRouter>
            {/* */}
            <Route path="/" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/access" exact component={FirstAccess} />
        </BrowserRouter>
    )
}