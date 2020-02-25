import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Container } from '@material-ui/core';
import RegisterLinks from './RegisterLinks';
import LoginLinks from './LoginLinks';

const Header = () => {
  const [auth, setAuth] = useState(false);
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" className="header-title">
            Blog App
          </Typography>
          {auth ? <LoginLinks /> : <RegisterLinks />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
