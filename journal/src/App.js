import React from 'react';
import './App.css';
import AdminLogin from "./components/Login"
import Database from "./components/testdb"
import SignUp from "./components/Register"
import Users from "./components/usersList"
import {Route,Link} from "react-router-dom"
import User from "./components/user"


function App() {
  return (
    <div className="App">
      <Route exact path="/admin" component={AdminLogin}/>
      <Route exact path="/db" component={Database}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/users" component={Users}/>
      <Route exact path="/users/:id" component={User}/>

    </div>
  );
}

export default App;
