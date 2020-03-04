import React from 'react';
import { Editor } from 'slate-react';
import renderMark from './renderMark';
import renderBlock from './renderBlock';

// Editor settings
const MyEditor = ({ value, onChange }) => {
  const onKeyDown = (event, editor, next) => {
    if (!event.ctrlKey) return next();

    switch (event.key) {
      case 'b': {
        event.preventDefault();
        editor.toggleMark('bold');
        break;
      }
      case 'i': {
        event.preventDefault();
        editor.toggleMark('italic');
        break;
      }
      case 'u': {
        event.preventDefault();
        editor.toggleMark('underline');
        break;
      }
      case '&': {
        event.preventDefault();
        editor.insertText('and');
        break;
      }
      case '`': {
        const isCode = editor.value.blocks.some(block => block.type === 'code');
        event.preventDefault();
        editor.setBlocks(isCode ? 'paragraph' : 'code');
        break;
      }
      default: {
        return next();
      }
    }
  };

  return (
    <Editor
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      renderBlock={renderBlock}
      renderMark={renderMark}
    />
  );
};

export default MyEditor;
