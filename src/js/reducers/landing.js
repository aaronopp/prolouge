import { createReducer } from './utils';

const initialState = {
  heroImg: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/09/11/104702698-GettyImages-583816330-book-club.1910x1000.jpg',
  features: [
    {
      title: 'Book recomentation',
      copy: "Our algorithm will scan your Group's content and suggest books to begin your Book Club experience or you can provide your own book suggestions."
    },
    {
      title: 'Facebook Planning',
      copy: 'Poll your members to see which book they want to read, how fast they want to read it, and how they want to discuss it: text only, video chat, or in VR. We will then create  discussion Events to fit your reading schedule.',
    },
    {
      title: 'Book purchasing',
      copy: 'We can help your Group members purchase the book at the lowest possible price or send them to whatever online content you wish to discuss.'
    },
    {
      title: 'Group discussion tools',
      copy: 'Whether you choose text, video, or VR, your book discussions will become Group content that you can use to drive engagement AND recruitment.',
    },
  ],
  copy: 'Bringing your book club online'
};

export default createReducer(initialState, {});
