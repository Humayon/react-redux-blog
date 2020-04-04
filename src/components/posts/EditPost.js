import React from 'react';
import PostForm from './PostForm';
import { useSelector } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { compose } from 'redux';

const EditPost = ({
  match: {
    params: { id },
  },
}) => {
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === id)
  );
  return <PostForm selectedPost={post} />;
};

export default EditPost;

// without redux hook
// const mapStateToProps = (state, ownProps) => {
//   const post = state.posts.find(post => post.id === ownProps.match.params.id);
//   return {
//     post
//   };
// };

// export default compose(withRouter, connect(mapStateToProps))(EditPost);
