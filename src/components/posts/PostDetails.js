import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { parseHtml } from '../../utils';

const PostDetails = ({
  posts,
  deletePost,
  history,
  editPost,
  match: {
    params: { id }
  }
}) => {
  const findPost = posts.find(post => post.id === id);

  const handleDelete = id => {
    deletePost(id);
    history.push('/');
  };

  const handleEdit = id => {
    editPost(id);
  };

  return (
    <React.Fragment>
      <Typography variant="h5" component="h3" className="post-title">
        {findPost.title}
      </Typography>
      <img
        className="image-styles"
        src={`/img/${findPost.img_url}`}
        alt="Blog Promo"
      />
      <Typography
        variant="body2"
        className="post-body"
        dangerouslySetInnerHTML={parseHtml(findPost.body)}
      ></Typography>
      <Typography variant="caption" align="left" display="block">
        Categories: {findPost.categories.join(',')}
      </Typography>
      <Typography variant="caption" align="right" display="block">
        written by Kabir on 1st March
      </Typography>
      <Button
        component={Link}
        to={`/edit/${findPost.id}`}
        variant="contained"
        color="primary"
        onClick={() => handleEdit(findPost.id)}
        className="edit-button"
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
