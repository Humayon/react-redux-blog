import React from 'react';
import PostForm from './PostForm';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

const EditPost = ({ editPost, updatedPost, post }) => {
  return (
    <PostForm
      editPost={editPost}
      updatedPost={updatedPost}
      selectedPost={post}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  const post = state.posts.find(post => post.id === ownProps.match.params.id);
  return {
    post
  };
};

export default compose(withRouter, connect(mapStateToProps))(EditPost);
