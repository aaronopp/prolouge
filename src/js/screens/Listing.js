import React from 'react';
import { connect } from 'react-redux';


import Section from 'grommet/components/Section';

import ListingItems from '../components/ListingItems';

const LandingPage = ({ data }) => (
  <Section pad='large'
    justify='start'
    align='start' >
    <ListingItems {...data} />
  </Section>
);


const select = state => ({
  session: state.session,
  data: state.listing
});

export default connect(select)(LandingPage);
