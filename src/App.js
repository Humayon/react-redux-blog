import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './components/header_footer';
import { Login, Register } from './components/auth';
import { NotFound } from './components/pages';
import DashboardIndex from './components/dashboard';
import { AddPost, EditPost, PostDetails } from './components/posts';
import postsData from './data/data';
import usePostHook from './components/hooks/post.hooks';

const App = () => {
  const { posts, addPost, updatePost, deletePost } = usePostHook(postsData);

  const [selectedPost, setSelectedPost] = useState(null);

  const editPost = id => {
    const foundPost = posts.find(post => post.id === id);
    setSelectedPost(foundPost);
  };

  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={DashboardIndex} />
            <Route path="/add" render={() => <AddPost addPost={addPost} />} />
            <Route
              path="/edit/:id"
              render={() => (
                <EditPost
                  selectedPost={selectedPost}
                  updatedPost={updatePost}
                />
              )}
            />
            <Route
              path="/post/:id"
              render={() => (
                <PostDetails
                  posts={posts}
                  deletePost={deletePost}
                  editPost={editPost}
                />
              )}
            />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
