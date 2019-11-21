import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import { Container, ActInfo } from "../../Styles/style-widgets";

function ReflectionForm() {
  console.log("hey you guys");
  const user_id = JSON.parse(window.localStorage.getItem("user id"));

  console.log(user_id);
  const user_name = JSON.parse(window.localStorage.getItem("username"));
  const [reflection, setReflection] = useState([]);
  useEffect(() => {
    api()
      .get(`/api/reflection-logs/${user_name}`)
      .then(res => {
        console.log(res);
        setReflection(res.data.reflectionLogs)
      })
        .catch(err => {
          console.log(err);
      });
  },[]);

  console.log(user_name);

  const handleChange = e => {
    setReflection({
      ...reflection,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api()
      .post(`/api/reflection-logs/${user_name}`, reflection)
      .then(res => {
        console.log(res);
        localStorage.setItem("add reflection", JSON.stringify(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
console.log(reflection)
  return (
    <Container>
      <h1>Add your relflections here!</h1>
      {reflection.map(reflection => (
        <div key={reflection.id}>
          <ActInfo>{reflection.reflection}</ActInfo>
         
          <ActInfo>{reflection.description}</ActInfo>
        </div>
      ))}
      <Link
        className="addActivity"
        to={`/userdashboard/${user_id}/AddReflection`}
      >
        Add Reflection
      </Link>
    </Container>
  );
}
export default ReflectionForm;
