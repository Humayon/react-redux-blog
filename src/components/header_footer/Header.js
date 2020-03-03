import React, { useState } from 'react';
import { AppBar, Toolbar, Container, Link } from '@material-ui/core';
import RegisterLinks from './RegisterLinks';
import LoginLinks from './LoginLinks';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const [auth, setAuth] = useState(true);
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Link
            variant="h6"
            className="header-title"
            color="inherit"
            underline="none"
            to="/"
            component={RouterLink}
          >
            Blog App
          </Link>
          {auth ? <LoginLinks /> : <RegisterLinks />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
