import React from 'react';
import { Route } from 'react-router-dom';
import UsersLogin from "../Components/Login/Login";
// import ProtectedRoute from "./ProtectedRoute";
// import FormikLoginForm from '../Login/Login';
// import UsersLogin from "../Login/RamyLogin";
// import Home from "../Login/Home";
// import AdminLogin from "../Login/AdminLogin";
// import SignUp from "../Register/Register";
// import Users from "../DashBoard/AdminDashboard";
import UserDashboard from "../Components/DashBoard/UserDashBoard";
import ProtectedRoute from "./ProtectedRoute";
// import User from "../DashBoard/User";
import Addactivity from "../Components/Activities/AddActivity";
import {getUserActivities} from "../Actions/UserAction";
import {connect} from "react-redux";
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
            {/*<Route exact path="/signup" component={SignUp}/>*/}
            {/*<Route exact path="/" component={Home}/>*/}
            {/*<ProtectedRoute exact path="/users" component={Users}/>*/}
            <ProtectedRoute exact path={`/dashboard`} component={UserDashboard}/>
            {/*<ProtectedRoute exact path="/users/:id" component={User}/>*/}
            {/*<ProtectedRoute exact path="/activity/:id" component={Editform}/>*/}
            <ProtectedRoute exact path={`/addactivity`} component={Addactivity}/>

            {/* <Route exact path="/AddReflection" component={ReflectionForm}/> */}
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