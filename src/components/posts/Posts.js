import React from 'react';
import { Paper } from '@material-ui/core';
import PostSummary from './PostSummary';
import { connect } from 'react-redux';

const Posts = ({ posts }) => {
  return (
    <React.Fragment>
      {posts.map(post => (
        <Paper elevation={4} key={post.id}>
          <PostSummary post={post} />
        </Paper>
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Posts);

// multiple HOC useage with redux
// import { compose } from 'redux';
// export default compose(connect(mapStateToProps), withStyles(styles))(Posts);
