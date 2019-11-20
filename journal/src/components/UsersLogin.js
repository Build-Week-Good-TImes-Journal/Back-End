import React, { useState } from "react";
import api from "../utils/api";
import { Button, HeaderLogin, Info, Container,  } from "../Styles/style-widgets";
import logo from "../Styles/logo.png";

function UsersLogin(props) {
  const [error, setError] = useState();
  const [login, setLogin] = useState({
    username: "",
    password: "",
    role: 1
  });

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api()
      .post("/api/auth/login", login)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user id", JSON.stringify(res.data.user_id));
        localStorage.setItem("user message", JSON.stringify(res.data.message));
        localStorage.setItem("username", JSON.stringify(login.username));
        props.history.push(`/userdashboard/${res.data.user_id}`);
        console.log(res);
      })
      .catch(err => {
        setError(err);
        console.log(error);
      });
  };

  return (
    <Container>
      <img className="Clogo"
        
        src={logo}
      
        alt="company logo"
      />
      <form onSubmit={handleSubmit}>
        <HeaderLogin>Login</HeaderLogin>

        
        <Info
          type="text"
          name="username"
          value={login.username}
          onChange={handleChange}
        />
        <Info
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
        />
     
        <Button type="submit">Login</Button>
        
      </form>
    </Container>
  );
}
export default UsersLogin;
