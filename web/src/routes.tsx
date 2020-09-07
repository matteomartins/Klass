import React from "react";
import { BrowserRouter, Route, Switch, RouteProps } from "react-router-dom";

import InfoIcon from "./components/InfoIcon";
import CalendarIcon from "./components/CalendarIcon";
import Header from "./components/Header";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Drag from "./pages/Drag";
import FirstAccess from "./pages/FirstAccess";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Feedback from "./pages/Feedback";
import Politics from "./pages/Politics";
import Help from "./pages/Help";
import Premium from "./pages/Premium";
import School from "./pages/School";
import Notifications from "./components/Notifications";
import CreateSchool from "./pages/CreateSchool";
import Class from "./pages/Class";
import Teachers from "./pages/Teachers";
import Shift from "./pages/Shift";
import TutorialCreate from "./pages/TutorialCreate";
import Schedule from "./pages/Schedule";

const RouteWithCalendar: React.FC<RouteProps> = ({ ...props }) => {
    return (
        <>
            <Header />
            <div className="main-container">
                <Route {...props} />
            </div>
            <CalendarIcon />
        </>
    );
};

const RouteWithInfo: React.FC<RouteProps> = ({ ...props }) => {
    return (
        <>
            <Header />
            <div className="main-container">
                <Route {...props} />
            </div>
            <InfoIcon />
        </>
    );
};

const RouteHeader: React.FC<RouteProps> = ({ ...props }) => {
    return (
        <>
            <Header />
            <div className="main-container">
                <Route {...props} />
            </div>
        </>
    );
};

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/access" exact component={FirstAccess} />
                {/* <RouteWithCalendar path="/drag" exact component={Drag} /> */}
                <RouteWithCalendar path="/profile" exact component={Profile} />
                <RouteWithCalendar path="/home" exact component={Home} />
                <RouteWithInfo path="/help" exact component={Help} />
                <RouteWithInfo path="/premium" exact component={Premium} />
                <RouteWithInfo
                    path="/notifications"
                    exact
                    component={Notifications}
                />
                <RouteWithCalendar path="/school" exact component={School} />
                <Route
                    path="/tutorial-create"
                    exact
                    component={TutorialCreate}
                />
                <RouteWithCalendar
                    path="/teachers"
                    exact
                    component={Teachers}
                />
                <RouteWithCalendar path="/class" exact component={Class} />
                <RouteWithInfo path="/feedback" exact component={Feedback} />
                <RouteWithInfo path="/politics" exact component={Politics} />
                <RouteWithInfo
                    path="/create-school"
                    exact
                    component={CreateSchool}
                />
                <RouteWithCalendar path="/shift" exact component={Shift} />
                <RouteHeader path="/schedule" exact component={Schedule} />
            </Switch>
        </BrowserRouter>
    );
}
