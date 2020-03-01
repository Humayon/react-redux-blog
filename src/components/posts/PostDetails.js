import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';

const PostDetails = ({
  posts,
  deletePost,
  history,
  match: {
    params: { id }
  }
}) => {
  const findPost = posts.find(post => post.id === Number(id));

  const handleDelete = id => {
    deletePost(id);
    history.push('/');
  };

  return (
    <React.Fragment>
      <Typography variant="h5" component="h3">
        {findPost.title}
      </Typography>
      <img src={`/img/${findPost.img_url}`} alt="Blog Promo" />
      <Typography variant="body2">{findPost.body}</Typography>
      <Typography variant="caption" align="right" display="block">
        written by Kabir on 1st March
      </Typography>
      <Button
        component={Link}
        to={`/edit/${findPost.id}`}
        variant="contained"
        color="primary"
      >
        Edit
      </Button>
      <Button
        onClick={() => handleDelete(findPost.id)}
        variant="contained"
        color="primary"
      >
        Delete
      </Button>
    </React.Fragment>
  );
};

export default withRouter(PostDetails);
