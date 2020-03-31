const initialState = [
  {
    id: '0',
    title: 'Sample Blog title',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aut rem, amet ullam qui, dignissimos repellendus nulla non reiciendis eius.',
    img_url: '1.jpg',
    categories: ['Travel', 'Blog']
  },
  {
    id: '1',
    title: 'Sample Blog title 2',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aut rem, amet ullam qui, dignissimos repellendus nulla non reiciendis eius.',
    img_url: '2.jpg',
    categories: ['Blog']
  },
  {
    id: '2',
    title: 'Sample Blog title 3',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aut rem, amet ullam qui, dignissimos repellendus nulla non reiciendis eius.',
    img_url: '3.jpg',
    categories: ['Travel']
  }
];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.post];
    case 'UPDATE_POST':
      return state.map(post =>
        post.id === action.id ? (post = action.post) : post
      );

    default:
      return state;
  }
};

export default postReducer;
