import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
const RegisterLinks = () => {
  return (
    <React.Fragment>
      <Button color="inherit" component={NavLink} to="/register">
        Register
      </Button>
      <Button color="inherit" component={NavLink} to="/login">
        Login
      </Button>
    </React.Fragment>
  );
};

export default RegisterLinks;
