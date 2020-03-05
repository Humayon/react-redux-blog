import React from 'react';
import { Editor } from 'slate-react';
import renderMark from './renderMark';
import renderBlock from './renderBlock';
import ToolBar from './ToolBar';
import { Button, Icon } from '@material-ui/core';

// Editor settings
const MyEditor = ({ value, onChange }) => {
  let refEditor;

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

  const onClickMark = (e, type) => {
    refEditor.toggleMark(type);
  };

  const renderMarkButton = (type, icon) => {
    return (
      <Button onClick={e => onClickMark(e, type)}>
        <Icon>{icon}</Icon>
      </Button>
    );
  };

  return (
    <React.Fragment>
      <ToolBar>
        {renderMarkButton('bold', 'format_bold')}
        {renderMarkButton('italic', 'format_italic')}
        {renderMarkButton('underline', 'format_underline')}
      </ToolBar>
      <Editor
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        renderBlock={renderBlock}
        renderMark={renderMark}
        ref={editor => (refEditor = editor)}
      />
    </React.Fragment>
  );
};

export default MyEditor;
