const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirKulFDDEXJXYXvQBA3h__hViWviTXM_Lyg&usqp=CAU',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://hdwallpaperim.com/wp-content/uploads/2017/08/26/181264-women_outdoors-landscape-model.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.pinimg.com/originals/32/16/8e/32168e0467f1a6a8e9dbbdc0525d28d4.jpg',
      size: 'large',
      id: 5,
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
