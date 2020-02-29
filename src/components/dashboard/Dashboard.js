import React from 'react';
import { Typography } from '@material-ui/core';
import { Posts } from '../posts';

const Dashbaord = ({ posts }) => {
  return (
    <React.Fragment>
      <Typography variant="h5" component="h2">
        Dashbaord
      </Typography>
      <Posts posts={posts} />
    </React.Fragment>
  );
};

export default Dashbaord;
