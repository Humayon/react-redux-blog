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

  const hasMark = type => {
    return value.activeMarks.some(mark => mark.type === type);
  };

  const renderMarkButton = (type, icon) => {
    const isActive = hasMark(type);
    return (
      <Button
        className={isActive ? 'active' : ''}
        onClick={e => onClickMark(e, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    );
  };

  const onClickBlock = (e, type, isActive) => {
    const { document } = value;
    const ul = 'unorderd-list';
    const ol = 'orderd-list';
    const li = 'list-item';

    if (type !== ol && type !== ul) {
      //block other than ol and ul
      const isActive = hasBlock(type);
      const isList = hasBlock(li);
      if (isList) {
        refEditor
          .setBlocks(isActive ? 'paragraph' : type)
          .unwrapBlock(ol)
          .unwrapBlock(ul);
      }
    } else {
      const isList = hasBlock(li);
      const isType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type === type);
      });
      if (isList && isType) {
        refEditor
          .setBlocks('paragraph')
          .unwrapBlock(ol)
          .unwrapBlock(ul);
      } else if (isList) {
        refEditor.unwrapBlock(type === ul ? ol : ul).wrapBlock(type);
      } else {
        refEditor.setBlocks(li).wrapBlock(type);
      }
    }
  };

  const hasBlock = type => {
    return value.blocks.some(block => block.type === type);
  };

  const renderBlockButton = (type, icon) => {
    let isActive = hasBlock(type);
    const { document, blocks } = value;
    const ul = 'unorderd-list';
    const ol = 'orderd-list';
    const li = 'list-item';
    if ([ul, ol].includes(type)) {
      if (blocks.size > 0) {
        const parent = document.getParent(blocks.first().key);
        isActive = hasBlock(li) && parent && parent.type === type;
      }
    }
    return (
      <Button
        className={isActive ? 'active' : ''}
        onClick={e => onClickBlock(e, type, isActive)}
      >
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
        {renderBlockButton('heading-four', 'looks_4')}
        {renderBlockButton('unorderd-list', 'format_list_bulleted')}
        {renderBlockButton('orderd-list', 'format_list_numbered')}
        {renderBlockButton('block-quote', 'format_quote')}
        {renderBlockButton('code', 'code')}
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
