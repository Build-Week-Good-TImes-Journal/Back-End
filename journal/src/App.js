import React from 'react';
import './App.css';
import AdminLogin from "./components/AdminLogin"
import Database from "./components/testdb"
import SignUp from "./components/Register"
import Users from "./components/usersList"
import {Route} from "react-router-dom"
import User from "./components/user"
import UserLogin from "./components/UsersLogin"
import UserDashboard from"./components/UserDashboard"
import Addactivity from "./components/Addactivity"




function App() {
  return (
    <div className="App">
      <Route exact path="/adminlogin" component={AdminLogin}/>
      <Route exact path="/Userlogin" component={UserLogin}/>
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