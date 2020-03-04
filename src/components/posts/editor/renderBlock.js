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
    case 'code':
      return <CodeNode {...props} />;
    default:
      return next();
  }
};

export default renderBlock;
