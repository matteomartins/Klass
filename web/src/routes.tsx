import React from "react";
import { BrowserRouter, Route, Switch, RouteProps } from "react-router-dom";

import InfoIcon from "./components/InfoIcon";
import CalendarIcon from "./components/CalendarIcon";
import Header from "./components/Header";

import Register from './pages/Register';
import Login from './pages/Login';
import FirstAccess from './pages/FirstAccess';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Feedback from './pages/Menu/Feedback';
import Politics from './pages/Menu/Politics';
import Help from './pages/Menu/Help';
import Premium from './pages/Menu/Premium';
import School from './pages/School';
import Notifications from './components/Notifications';
import CreateSchool from './pages/CreateSchool';
import Class from './pages/Grade';
import Teachers from './pages/Dashboard/Teachers';
import Schedule from './pages/Schedule';
import Courses from './pages/Dashboard/Courses';
import Modules from './pages/Dashboard/Modules';
import Dashboard from "./pages/Dashboard/Dashboard";
import Page404 from "./pages/404";
import Turns from "./pages/Dashboard/Turns";
import Reports from "./pages/Dashboard/Reports";
import Classes from "./pages/Dashboard/Classes";
import Subjects from "./pages/Dashboard/Subjects";

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

const RouteOnlyInfo: React.FC<RouteProps> = ({ ...props }) => {
    return (
        <>
            <div className="main-container-center">
                <Route {...props} />
            </div>
            <InfoIcon />
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

                <RouteWithCalendar path="/home" exact component={Home} />
                <RouteWithCalendar path="/profile" exact component={Profile} />
                <RouteWithCalendar path="/school" exact component={School} />
                <RouteWithCalendar path="/class" exact component={Class} />
                <RouteHeader path="/schedule" exact component={Schedule} />
                <RouteOnlyInfo path="/create-school" exact component={CreateSchool} />

                <RouteWithInfo path="/help" exact component={Help} />
                <RouteWithInfo path="/premium" exact component={Premium} />
                <RouteWithInfo path="/notifications" exact component={Notifications} />
                <RouteWithInfo path="/feedback" exact component={Feedback} />
                <RouteWithInfo path="/politics" exact component={Politics} />

                <RouteWithCalendar path="/dashboard" exact component={Dashboard} />
                <RouteWithCalendar path="/dashboard-courses" exact component={Courses} />
                <RouteWithCalendar path="/dashboard-teachers" exact component={Teachers} />
                <RouteWithCalendar path="/dashboard-modules" exact component={Modules} />
                <RouteWithCalendar path="/dashboard-reports" exact component={Reports} />
                <RouteWithCalendar path="/dashboard-turns" exact component={Turns} />
                <RouteWithCalendar path="/dashboard-subjects" exact component={Subjects} />
                <RouteWithCalendar path="/dashboard-classes" exact component={Classes} />
                <RouteWithCalendar path="/dashboard-schedule" exact component={Schedule} />

                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    );
}
