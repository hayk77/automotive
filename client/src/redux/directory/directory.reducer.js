const INITIAL_STATE = {
  sections: [
    {
      title: 'ակսեսուարներ',
      imageUrl:
        'https://images.unsplash.com/photo-1524114051012-0a2aa8dae4e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'պահեստամասեր',
      imageUrl:
        'https://images.unsplash.com/photo-1527383418406-f85a3b146499?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'էլեկտրոնիկա',
      imageUrl:
        'https://images.unsplash.com/photo-1571512292793-332aca7b7f80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'սրահ',
      imageUrl:
        'https://images.unsplash.com/photo-1546933751-ab7b6e888c66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'խնամք',
      imageUrl:
        'https://images.unsplash.com/photo-1565689876697-e467b6c54da2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    },
    {
      title: 'անվտանգություն',
      imageUrl:
        'https://images.unsplash.com/photo-1511377398397-8f0fb9ae372d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      size: 'large',
      id: 6,
      linkUrl: 'shop/mens'
    },
    {
      title: 'ձևավորում',
      imageUrl:
        'https://images.unsplash.com/photo-1541238461542-84a690d5e638?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      size: 'large',
      id: 7,
      linkUrl: 'shop/mens'
    },
    {
      title: 'այլ',
      imageUrl:
        'https://images.unsplash.com/photo-1522598140461-ec9911e01c53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      size: 'large',
      id: 7,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
