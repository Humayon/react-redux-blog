import React from 'react';
import { Editor } from 'slate-react';

const MyEditor = ({ value, onChange }) => {
  return <Editor value={value} onChange={onChange} />;
};

export default MyEditor;
