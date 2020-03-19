import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from '@material-ui/core';
const Layout = props => {
  return (
    <React.Fragment>
      <Header />
      <Container className="wrap-container">{props.children}</Container>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
