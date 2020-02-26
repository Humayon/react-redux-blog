import React from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = ({ isSubmitting, errors, touched }) => {
  return (
    <Form>
      <label htmlFor="firstName">First Name</label>
      <Field type="text" name="firstName" />
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
      <ErrorMessage name="firstName" component="div" />
    </Form>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      firstName: ''
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Minimum 2 character required')
      .max(7, 'Maximum 7 character')
      .required('First Name is required')
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
      resetForm();
    }, 1000);
  }
})(Register);
