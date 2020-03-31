import { createStore, combineReducers } from 'redux';
import postReducer from './reducer/postReducer';
import { addPost, updatePost } from './actions/postAction';

const store = createStore(
  combineReducers({
    posts: postReducer
  })
);

export { store, addPost, updatePost };
