import React from 'react';
import { Route } from 'react-router-dom';
import UsersLogin from "../Components/Login/Login";
import Logout from "../Components/Login/Logout";
import ActivityLog from "../Components/Activities/ActivityLog";
import ReflectionForm from "../Components/Reflections/Reflections";
import EditActivity from "../Components/Activities/EditActivity";
// import ProtectedRoute from "./ProtectedRoute";
// import FormikLoginForm from '../Login/Login';
// import UsersLogin from "../Login/RamyLogin";
// import Home from "../Login/Home";
// import AdminLogin from "../Login/AdminLogin";
import SignUp from "../Components/Registration/Registration";
// import Users from "../DashBoard/AdminDashboard";
import UserDashboard from "../Components/DashBoard/UserDashBoard";
import ProtectedRoute from "./ProtectedRoute";
// import User from "../DashBoard/User";
import EditActivityLog from "../Components/Activities/EditActivityLog";
import {getUserActivities} from "../Actions/UserAction";
import {connect} from "react-redux";
import EditReflection from "../Components/Reflections/EditReflection";
import ActivityLogs from "../Components/Activities/ActivityLogs";
// import Editform from "../Activites/Editactivity";

// import UserDb from "../DashBoard/UserDb"
//
// import ReflectionForm from "../Reflections/Reflections"


const AppRouting = ({ name }) => {

    return (
        <div>

            {/*<Route exact path="/" component={FormikLoginForm} />*/}
            {/*<Route exact path="/admin-login" component={AdminLogin}/>*/}
            <Route exact path="/" component={UsersLogin}/>
            <Route exact path="/signup" component={SignUp}/>
            {/*<Route exact path="/" component={Home}/>*/}
            {/*<ProtectedRoute exact path="/users" component={Users}/>*/}
            <ProtectedRoute exact path={`/dashboard`} component={UserDashboard}/>
            <ProtectedRoute exact path={`/myactivities`} component={ActivityLog}/>
            {/*<ProtectedRoute exact path="/users/:id" component={User}/>*/}
            <ProtectedRoute exact path="/activity/:id" component={EditActivity}/>
            <ProtectedRoute exact path="/activitylog/:id" component={EditActivityLog}/>
            <ProtectedRoute exact path="/activitylogs" component={ActivityLogs} />
            <ProtectedRoute exact path="/reflection/:id" component={EditReflection}/>
            {/*<ProtectedRoute exact path={`/addactivity`} component={Addactivity}/>*/}
            <ProtectedRoute exact path={`/logout`} component={Logout}/>

             <Route exact path="/AddReflection" component={ReflectionForm}/>
            {/*<Route exact path="/userdb/:id" component={UserDb}/>*/}

            {/*<Route exact path="/AddReflection" component={ReflectionForm}/>*/}
        </div>
    )

};

function mapStateToProps(state) {
    return {
        name: state.username,
        id: state.user_id,
        activity: state.activities
    }
}



export default connect (
    mapStateToProps)(AppRouting);