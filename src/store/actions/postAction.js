const addPost = post => {
  return {
    type: 'ADD_POST',
    post
  };
};
const updatePost = (post, id) => {
  return {
    type: 'UPDATE_POST',
    post,
    id
  };
};

export { addPost, updatePost };
