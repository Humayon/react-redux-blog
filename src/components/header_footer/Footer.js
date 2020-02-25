import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';
const Footer = () => {
  return (
    <Container>
      <Typography paragraph={true} align="center">
        &copy;
        <Link
          href="https://humayon.com"
          target="_blank"
          color="primary"
          underline="none"
        >
          Humayon Kabir
        </Link>
        | All Rights Reserved
      </Typography>
    </Container>
  );
};

export default Footer;
