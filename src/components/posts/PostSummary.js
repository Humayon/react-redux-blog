import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { truncateText } from '../../utils';

const PostSummary = ({ post }) => {
  return (
    <React.Fragment>
      <Typography variant="h5" component="h3">
        {post.title}
      </Typography>
      <Typography variant="body2">{truncateText(post.body, 80)}</Typography>
      <Button
        component={Link}
        to={`/post/${post.id}`}
        variant="contained"
        color="primary"
      >
        Read More
      </Button>
    </React.Fragment>
  );
};

export default PostSummary;
