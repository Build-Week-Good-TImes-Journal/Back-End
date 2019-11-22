import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import { Container, ActInfo, ActInfo2, Button } from "../../Styles/style-widgets";

function ReflectionForm() {
  const user_id = JSON.parse(window.localStorage.getItem("user id"));

  console.log(user_id);
  const user_name = JSON.parse(window.localStorage.getItem("username"));
  const [newReflection, setNewReflection] = useState({
    reflection: ""
  });
  const [reflection, setReflection] = useState([]);
  useEffect(() => {
    api()
      .get(`/api/reflection-logs/${user_name}`)
      .then(res => {
        console.log(res);
        setReflection(res.data.reflectionLogs);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(user_name);

  const handleChange = e => {
    setNewReflection({
      ...newReflection,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api()
      .post(`/api/reflection-logs/${user_name}`, newReflection)
      .then(res => {
        console.log(res);
        localStorage.setItem("add reflection", JSON.stringify(res.data));
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };
  console.log(reflection);
  return (
    <Container>
      <ActInfo>Add your relflections here!</ActInfo>
      <form onSubmit={handleSubmit}>
        <textarea
          className="textArea"
          type="text"
          name="reflection"
          value={newReflection.reflection}
          placeholder="How was your week"
          onChange={handleChange}
        />
        <button className="refButton" type="submit">Add Reflection</button>
      </form>

      {reflection.map(reflection => (
        <div key={reflection.id}>
          <ActInfo2>{reflection.reflection}</ActInfo2>
          <ActInfo2>{reflection.description}</ActInfo2>
        </div>
      ))}
    </Container>
  );
}
export default ReflectionForm;
