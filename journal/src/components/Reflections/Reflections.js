import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import { Container, ActInfo , Button} from "../../Styles/style-widgets";

function ReflectionForm() {
  const user_id = JSON.parse(window.localStorage.getItem("user id"));

  console.log(user_id);
  const user_name = JSON.parse(window.localStorage.getItem("username"));
  const [newReflection, setNewReflection] = useState({
      reflection: ''
  });
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
        window.location.reload()
      })
      .catch(err => {
        console.log(err);
      });
  };
console.log(reflection)
  return (
    <Container>
      <h1>Add your relflections here!</h1>
      <form onSubmit={handleSubmit} >
      <textarea type='text' 
      name='reflection' 
      value={newReflection.reflection} 
      placeholder="How was your week" 
      onChange={handleChange}
      />
      <Button type='submit'>Add Reflection</Button>
      </form>

      {reflection.map(reflection => (
        <div key={reflection.id}>
          <ActInfo>{reflection.reflection}</ActInfo>
         
          <ActInfo>{reflection.description}</ActInfo>
        </div>
      ))}
      
      </Container>
  );
}
export default ReflectionForm;
