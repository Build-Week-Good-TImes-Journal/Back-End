import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import FormikLoginForm from '../Login/Login';
import UsersLogin from "../Login/RamyLogin";
import Home from "../Login/Home";
import AdminLogin from "../Login/AdminLogin";
import SignUp from "../Register/Register";
import Users from "../DashBoard/AdminDashboard";
import UserDashboard from "../DashBoard/UserDashboard";
import User from "../DashBoard/User";
import Addactivity from "../Activites/Activity";
import Editform from "../Activites/Editactivity";
<<<<<<< HEAD
import UserDb from "../DashBoard/UserDb"
=======
import ReflectionForm from "../Reflections/Reflections"
>>>>>>> bb3fe763380d1ee8a76a2d4cb53494d54831772b

const AppRouting = (props) => {

console.log(props);
    return (
        <div>

            {/*<Route exact path="/" component={FormikLoginForm} />*/}
            <Route exact path="/admin-login" component={AdminLogin}/>
            <Route exact path="/User-login" component={UsersLogin}/>
            <Route exact path="/signup" component={SignUp}/>
            <ProtectedRoute exact path="/" component={Home}/>
            <ProtectedRoute exact path="/users" component={Users}/>
            <ProtectedRoute exact path="/userdashboard/:id" component={UserDashboard}/>
            <ProtectedRoute exact path="/users/:id" component={User}/>
            <ProtectedRoute exact path="/activity/:id" component={Editform}/>
            <ProtectedRoute exact path="/userdashboard/:id/addactivity" component={Addactivity}/>
<<<<<<< HEAD
            {/* <Route exact path="/AddReflection" component={ReflectionForm}/> */}
            <Route exact path="/userdb/:id" component={UserDb}/>
=======
            <Route exact path="/AddReflection" component={ReflectionForm}/>
>>>>>>> bb3fe763380d1ee8a76a2d4cb53494d54831772b
            
        </div>
    )

};

export default AppRouting;