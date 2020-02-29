import React from 'react';
import Dashbaord from './Dashboard';
import Sidebar from './Sidebar';
import { Grid } from '@material-ui/core';

const DashboardIndex = ({ posts }) => {
  return (
    <React.Fragment>
      <Grid container spacing={2} className="grid-margin">
        <Grid item xs={8}>
          <Dashbaord posts={posts} />
        </Grid>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DashboardIndex;
