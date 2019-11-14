Copy
import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";


function LoginForm({ values, errors, touched, isSubmitting }) {
  return (
    <form>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="username" name="username" placeholder="username" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password, tos, meal }) {
    return {
      login: email || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    Login: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(16, "Password must be 16 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
   
})(LoginForm);

export default FormikLoginForm;
