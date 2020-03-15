import React from 'react';
import PostForm from './PostForm';

const EditPost = ({ editPost, updatedPost, selectedPost }) => {
  return (
    <PostForm
      editPost={editPost}
      updatedPost={updatedPost}
      selectedPost={selectedPost}
    />
  );
};

export default EditPost;
