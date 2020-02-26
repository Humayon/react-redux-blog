import React from 'react';
import { withFormik } from 'formik';
const Register = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  isSubmitting
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      firstName: ''
    };
  },
  handleSubmit(values, { resetForm, setSubmitting }) {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 1000);
  }
})(Register);
