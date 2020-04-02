import { createStore, combineReducers } from 'redux';
import postReducer from './reducer/postReducer';
import { addPost, updatePost, deletePost } from './actions/postAction';

const store = createStore(
  combineReducers({
    posts: postReducer
  })
);

export { store, addPost, updatePost, deletePost };
