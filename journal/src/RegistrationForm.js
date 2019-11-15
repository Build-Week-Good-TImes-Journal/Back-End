import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { } from "reactstrap";
import styled from "styled-components";

const Header = styled.h1`
  font-size: 0.75rem;
  color: #fff486;
  text-alingment: center;

`;

const SignIn  = styled.button`
    border-radius: 7px;
    width: 1rems;
    margin: 4px;

    
    `

const RegLink = styled.a`
font-size: 6px;
color: #28A40E;
`    

const Container = styled.body`
display-flex: flex;
justify-content: center;
font-size: 12px;
margin: 0 auto;
text-align: center;
background-color: #0B6073;
border-radius: 7px;
font-family: monospace, ubuntu;
height: 500px;
`
const Fields = styled.input`
margin: 2px;
border-radius: 3px;
`

function LoginForm({ values, errors, touched }) {
  return (
      <Container>
          <div>
    <Form>
      <div>
       <Header>
          Welocome to the Simple Enjoyment <br /> Sign-in Page
          </Header>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Fields type="email" name="email" placeholder="Email or Username" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Fields type="password" name="password" placeholder="Password" />
      </div>
       <SignIn>Sign in!</SignIn>
      <div>
        <RegLink href="url">if you don't have an account with us sign up here!</RegLink>
        </div>
        <SignIn>Register Here</SignIn>
    </Form>
    </div>
    </Container>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  }
})(LoginForm);

export default FormikLoginForm;
