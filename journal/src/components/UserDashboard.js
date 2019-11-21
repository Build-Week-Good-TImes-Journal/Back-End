import React, { useState, useEffect } from "react";
import api from "../utils/api";
import { Link } from "react-router-dom";
import { Container, HeaderLogin, ActInfo } from "../Styles/style-widgets";

function UserDashboard(props) {
  const user_id = JSON.parse(window.localStorage.getItem("user id"));
  const [message, setMessage] = useState("");
  const Store = JSON.parse(window.localStorage.getItem("user message"));

  const [user, setUser] = useState([]);

  useEffect(() => {
    api()
      .get(`/api/activities/user/${user_id}`)
      .then(res => {
        console.log(res);
        setUser(res.data);
        setMessage(Store);
      })
      .catch(err => {
        console.log(err);
      });
  }, [user_id]);

  return (
    <Container>
      <HeaderLogin>{message}</HeaderLogin>
      {user.map(activity => (
        <div key={activity.id}>
          <ActInfo>{activity.name}</ActInfo>
          <ActInfo>{activity.description}</ActInfo>
        </div>
      ))}
      <Link className="addActivity" to={`/userdashboard/${user_id}/addactivity`}>
        Add Activity
      </Link>
      <Link to="/AddReflection">
        Click Me
      </Link>
    </Container>
  );
}

export default UserDashboard;
