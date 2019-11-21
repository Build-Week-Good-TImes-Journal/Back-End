import React from 'react';
import {Route} from "react-router-dom"
import './App.css';
import ProtectedRoute from "./components/Routes/ProtectedRoute"
import Home from "./components/Home/Home"
import AdminLogin from "./components/Login/AdminLogin"
import SignUp from "./components/Signup/Register"
import Users from "./components/Dashboard/usersList"
import User from "./components/Dashboard/user"
import UserLogin from "./components/Login/UsersLogin"
import UserDashboard from"./components/Dashboard/UserDashboard"
import Addactivity from "./components/Activites/Addactivity"



function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/admin-login" component={AdminLogin}/>
      <Route exact path="/User-login" component={UserLogin}/>
      <Route exact path="/signup" component={SignUp}/>
      <ProtectedRoute exact path="/users" component={Users}/>
      <ProtectedRoute exact path="/userdashboard/:id" component={UserDashboard}/>
      <ProtectedRoute exact path="/users/:id" component={User}/>
      <ProtectedRoute exact path="/userdashboard/:id/addactivity" component={Addactivity}/>
    </div>
  );
}

export default App;
