import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Button,
  ListItemText,
  Select,
  MenuItem
} from '@material-ui/core';

import initialValue from './editor/value';
import MyEditor from './editor';
import html from './editor/rules';
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from 'react-router-dom';

const categories = [
  { label: 'Travel', value: 'travel' },
  { label: 'Journey', value: 'journey' },
  { label: 'Blog', value: 'blog' }
];

const PostForm = ({ addPost, history }) => {
  const [title, setTitle] = useState();
  const [error, setError] = useState(false);
  const [category, setCategory] = useState([]);
  const [editor, setEditor] = useState(initialValue);

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title === '') {
      setError(true);
      return;
    }

    if (category && category.length === 0) {
      setError(true);
      return;
    }

    const post = {
      id: uuidv4(),
      title,
      img_url: '2.jpg',
      categories: category,
      body: localStorage.getItem('content')
    };
    addPost(post);
    //redirect after succesful post
    history.push('/');
  };

  const handleCategory = e => {
    setCategory(e.target.value);
  };

  const editorHandleChange = ({ value }) => {
    if (value.document !== editor.document) {
      const serializedValue = html.serialize(value);
      localStorage.setItem('content', serializedValue);
    }
    setEditor(value);
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <Typography
        variant="h5"
        component="h2"
        align="center"
        className="form-title"
      >
        Add Post
      </Typography>

      <TextField
        placeholder="Enter your blog title"
        fullWidth
        error={error}
        onChange={handleChange}
        helperText="Title is required"
      />

      <MyEditor value={editor} onChange={editorHandleChange} />

      <Select
        error={error}
        multiple
        displayEmpty
        onChange={handleCategory}
        value={category}
        renderValue={selected =>
          selected && selected.length === 0
            ? 'Select Category'
            : selected.join(', ')
        }
      >
        {categories.map(category => (
          <MenuItem value={category.value} key={category.label}>
            <ListItemText primary={category.label} />
          </MenuItem>
        ))}
      </Select>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="btn-submit"
      >
        Add post
      </Button>
    </form>
  );
};

export default withRouter(PostForm);
