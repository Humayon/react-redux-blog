import React from 'react';
import { withFormik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@material-ui/core';

const Register = ({ isSubmitting, handleChange, handleBlur, values }) => {
  return (
    <Form noValidate className="register-form">
      <TextField
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        label="First Name"
        fullWidth
        type="text"
      />
      <ErrorMessage
        name="firstName"
        component="div"
        className="error-warning"
      />

      <TextField
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Last Name"
        fullWidth
        type="text"
      />
      <ErrorMessage name="lastName" component="div" className="error-warning" />

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
      <ErrorMessage name="password" component="div" className="error-warning" />

      <TextField
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Confirm Password"
        fullWidth
        type="password"
      />
      <ErrorMessage
        name="confirmPassword"
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
        Regsiter
      </Button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Minimum 2 character required')
      .max(7, 'Maximum 7 character')
      .required('First Name is required'),
    lastName: Yup.string()
      .min(2, 'Minimum 2 character required')
      .max(7, 'Maximum 7 character')
      .required('Last Name is required'),
    email: Yup.string()
      .email()
      .required('Valid Email is required'),
    password: Yup.string()
      .min(7, 'Minimum 7 character required')
      .max(10, 'Maximum 10 character')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password not matched')
      .required('Confirm password')
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
      resetForm();
    }, 1000);
  }
})(Register);
