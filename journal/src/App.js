import React from 'react';
import {Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home"
import AdminLogin from "./components/AdminLogin"
import Database from "./components/testdb"
import SignUp from "./components/Register"
import Users from "./components/usersList"
import User from "./components/user"
import UserLogin from "./components/UsersLogin"
import UserDashboard from"./components/UserDashboard"
import Addactivity from "./components/Addactivity"



function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/admin-login" component={AdminLogin}/>
      <Route exact path="/User-login" component={UserLogin}/>
      <Route exact path="/db" component={Database}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/users" component={Users}/>
      <Route exact path="/userdashboard/:id" component={UserDashboard}/>
      <Route exact path="/users/:id" component={User}/>
      <Route exact path="/userdashboard/:id/addactivity" component={Addactivity}/>
      
    </div>
  );
}

export default App;
