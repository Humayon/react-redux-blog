import React from 'react';
import { withFormik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography } from '@material-ui/core';

const Login = ({ isSubmitting, handleChange, handleBlur, values }) => {
  return (
    <React.Fragment>
      <Typography
        variant="h5"
        component="h2"
        align="center"
        className="form-title"
      >
        Login
      </Typography>
      <Form noValidate className="register-form">
        <TextField
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Email"
          fullWidth
          type="email"
        />
        <ErrorMessage name="email" component="div" className="error-warning" />

        <TextField
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Password"
          fullWidth
          type="password"
        />
        <ErrorMessage
          name="password"
          component="div"
          className="error-warning"
        />

        <Button
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          type="submit"
          className="btn-submit"
        >
          Login
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      email: '',
      password: ''
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Valid Email is required'),
    password: Yup.string()
      .min(7, 'Minimum 7 character required')
      .max(10, 'Maximum 10 character')
      .required('Password is required')
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
      resetForm();
    }, 1000);
  }
})(Login);
