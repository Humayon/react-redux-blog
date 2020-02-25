import React from 'react';
import { Container, Typography } from '@material-ui/core';

const NotFound = () => {
  return (
    <Container>
      <Typography
        variant="h2"
        align="center"
        color="error"
        className="not-found-content"
      >
        404:The Page you are look is not found!!! <br />
        Please try again
      </Typography>
    </Container>
  );
};

export default NotFound;
