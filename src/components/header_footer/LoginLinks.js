import React from 'react';
import { Button, Fab } from '@material-ui/core';

const LoginLinks = () => {
  return (
    <React.Fragment>
      <Button color="inherit">Add Post</Button>
      <Button color="inherit">Log Out</Button>
      <Fab size="medium" color="primary" variant="round">
        HK
      </Fab>
    </React.Fragment>
  );
};

export default LoginLinks;
