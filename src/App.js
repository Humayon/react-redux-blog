import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './components/header_footer';
import { Login, Register } from './components/auth';
import { NotFound } from './components/pages';
import DashboardIndex from './components/dashboard';
import { AddPost, EditPost, PostDetails } from './components/posts';
import postsData from './data/data';

const App = () => {
  const [posts, setPosts] = useState(postsData);

  const deletePost = id => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <DashboardIndex posts={posts} />}
            />
            <Route path="/add" component={AddPost} />
            <Route path="/edit/:id" component={EditPost} />
            <Route
              path="/post/:id"
              component={() => (
                <PostDetails posts={posts} deletePost={deletePost} />
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
