import React from 'react';
import { Route } from 'react-router-dom';
import UsersLogin from "../Components/Login/Login";
import Logout from "../Components/Login/Logout";
import ActivityLog from "../Components/Activities/ActivityLog";
import ReflectionForm from "../Components/Reflections/Reflections";
import EditActivity from "../Components/Activities/EditActivity";
import SignUp from "../Components/Registration/Registration";
import UserDashboard from "../Components/DashBoard/UserDashBoard";
import ProtectedRoute from "./ProtectedRoute";
import EditActivityLog from "../Components/Activities/EditActivityLog";
import EditReflection from "../Components/Reflections/EditReflection";
import ActivityLogs from "../Components/Activities/ActivityLogs";
import { Container } from '../Styles/StyledWidgets';

const AppRouting = () => {

    //All components routes live here, Protected routes need a toke to access
    return (
        <Container>
            <Route exact path="/" component={UsersLogin}/>
            <Route exact path="/signup" component={SignUp}/>
            <ProtectedRoute exact path={`/dashboard`} component={UserDashboard}/>
            <ProtectedRoute exact path={`/myactivities`} component={ActivityLog}/>
            <ProtectedRoute exact path="/activity/:id" component={EditActivity}/>
            <ProtectedRoute exact path="/activitylog/:id" component={EditActivityLog}/>
            <ProtectedRoute exact path="/activitylogs" component={ActivityLogs} />
            <ProtectedRoute exact path="/reflection/:id" component={EditReflection}/>
            <ProtectedRoute exact path={`/logout`} component={Logout}/>
            <ProtectedRoute exact path="/AddReflection" component={ReflectionForm}/>
        </Container>
    )
};

export default AppRouting;