import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Button,
  ListItemText,
  Select,
  MenuItem
} from '@material-ui/core';
import { Editor } from 'slate-react';
import initialValue from './editor/value';
import MyEditor from './editor';

const categories = [
  { label: 'Travel', value: 'travel' },
  { label: 'Journey', value: 'journey' },
  { label: 'Blog', value: 'blog' }
];

const PostForm = () => {
  const [title, setTitle] = useState();
  const [error, setError] = useState(false);
  const [category, setCategory] = useState([]);
  const [editor, setEditor] = useState(initialValue);

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError(true);
  };

  const handleCategory = e => {
    setCategory(e.target.value);
  };

  const editorHandleChange = ({ value }) => {
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
        multiple
        displayEmpty
        onChange={handleCategory}
        value={category}
        renderValue={selected =>
          selected && selected.length === 0 ? 'Category' : selected.join(', ')
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

export default PostForm;
