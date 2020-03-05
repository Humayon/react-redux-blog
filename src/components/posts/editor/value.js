import { Value } from 'slate';

const existingValue = JSON.parse(localStorage.getItem('content'));

// Create our initial value...
const initialValue = Value.fromJSON(
  existingValue || {
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
  }
);
export default initialValue;
