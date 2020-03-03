import { Value } from 'slate';
// Create our initial value...
const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'Type your post here'
          }
        ]
      }
    ]
  }
});
export default initialValue;
