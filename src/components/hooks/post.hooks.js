import { useState } from 'react';

//maintain useHookName for custom hooks
const usePostHook = (initialData = []) => {
  const [posts, setPosts] = useState(initialData);

  return {
    posts,
    addPost() {},
    deletePost(id) {
      setPosts(posts.filter(post => post.id !== id));
    },
    updatePost() {}
  };
};

export default usePostHook;
