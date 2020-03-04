import React from 'react';
// Add a `renderMark` method to render marks.
const renderMark = (props, editor, next) => {
  const { attributes, children, mark } = props;
  switch (mark.type) {
    case 'bold':
      return <strong {...attributes}>{children}</strong>;
    case 'italic':
      return <em {...attributes}>{children}</em>;
    case 'underline':
      return <u {...attributes}>{children}</u>;
    default:
      return next();
  }
};
export default renderMark;
