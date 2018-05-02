import { createReducer } from './utils';

const initialState = {
  items: [
    {
      title: 'Leadership in Surgery',
      authors: ['Melina R. Kibbe'],
      thumbnail: 'http://t2.gstatic.com/images?q=tbn:ANd9GcSI2oCBAsRLFrJTbI6c3ysFUPeLIUgGQwRUcTNl8rsj3uKBAEAZ',
      description: "Our algorithm will scan your Group's content and suggest books to begin your Book Club experience or you can provide your own book suggestions.",
      selected: true,
    },
    {
      title: 'Hot Lights, Cold Steel: Life, Death and Sleepless Nights in a Surgeon’s First Years ',
      authors: ['Dr. Michael J. Collins'],
      thumbnail: 'http://t3.gstatic.com/images?q=tbn:ANd9GcRO9ojNNj1WT06AmfV4TjMW7IP50V08_GYKeiHXlPxXeoTYlCVz',
      description: "Our algorithm will scan your Group's content and suggest books to begin your Book Club experience or you can provide your own book suggestions.",
      selected: true,
    },
    {
      title: 'The Checklist Manifesto',
      authors: ['Atul Gawande'],
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/41bWVM7hCjL._SX331_BO1,204,203,200_.jpg',
      description: "Our algorithm will scan your Group's content and suggest books to begin your Book Club experience or you can provide your own book suggestions.",
      selected: true,
    },
  ],
  copy: 'Bringing your book club online'
};

export default createReducer(initialState, {});
