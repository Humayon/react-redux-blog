import React from 'react';

//component
const CodeNode = props => {
  const { attributes, children } = props;
  return (
    <pre {...attributes}>
      <code>{children}</code>
    </pre>
  );
};

// Add a `renderBlock` method to render a `CodeNode` for code blocks.
const renderBlock = (props, editor, next) => {
  const { attributes, children, node } = props;

  switch (node.type) {
    case 'paragraph':
      return <p {...attributes}>{children}</p>;
    case 'heading-four':
      return <h4 {...attributes}>{children}</h4>;
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    case 'unorderd-list':
      return <ul {...attributes}>{children}</ul>;
    case 'orderd-list':
      return <ol {...attributes}>{children}</ol>;
    case 'code':
      return <CodeNode {...props} />;
    default:
      return next();
  }
};

export default renderBlock;
