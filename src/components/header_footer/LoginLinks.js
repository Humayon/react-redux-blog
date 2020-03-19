import React from 'react';
import { Button, Fab } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const LoginLinks = () => {
  return (
    <React.Fragment>
      <Button color="inherit" component={NavLink} to="/add">
        Add Post
      </Button>
      <Button color="inherit" component={NavLink} to="!#">
        Log Out
      </Button>
      <Fab size="medium" color="primary" variant="round">
        HK
      </Fab>
    </React.Fragment>
  );
};

export default LoginLinks;
