import { createReducer } from './utils';

const initialState = {
  items: [
    {
      title: 'El Aleph',
      authors: ['Borges'],
      thumbnail: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQmvByINHkD329w1ghdNuu4VrZrIthXtmBsbDBXAnJVnxCRjjQW',
      description: "Our algorithm will scan your Group's content and suggest books to begin your Book Club experience or you can provide your own book suggestions.",
      selected: true,
    },
    {
      title: 'Freakonomics',
      authors: ['Borges', 'Bioy Casares'],
      thumbnail: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQmvByINHkD329w1ghdNuu4VrZrIthXtmBsbDBXAnJVnxCRjjQW',
      description: "Our algorithm will scan your Group's content and suggest books to begin your Book Club experience or you can provide your own book suggestions.",
      selected: true,
    },
    {
      title: 'El Aleph',
      authors: ['Borges'],
      thumbnail: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQmvByINHkD329w1ghdNuu4VrZrIthXtmBsbDBXAnJVnxCRjjQW',
      description: "Our algorithm will scan your Group's content and suggest books to begin your Book Club experience or you can provide your own book suggestions.",
      selected: true,
    },
    {
      title: 'El Aleph',
      authors: ['Borges'],
      thumbnail: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQmvByINHkD329w1ghdNuu4VrZrIthXtmBsbDBXAnJVnxCRjjQW',
      description: "Our algorithm will scan your Group's content and suggest books to begin your Book Club experience or you can provide your own book suggestions.",
      selected: true,
    },
  ],
  copy: 'Bringing your book club online'
};

export default createReducer(initialState, {});
