import React from 'react';
import { connect } from 'react-redux';


import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Checkmark from 'grommet/components/icons/base/checkmark';

import Button from 'grommet/components/Button';


const Congrats = ({ data, match, postAll, confirmation, auth }) => (
  <Section pad='large'
    className='confirmation'
    justify='start'
    align='center' >

    <Heading margin='none'>
    Blast off! Please check your Facebook to see how we’ve done!
    </Heading>
    <br />
    <br />
    <Checkmark size='huge' />
    <br />
    <br />
    <Button label='Browse more'
      path='/listing'
    />
  </Section>
);


const select = state => ({
  session: state.session,
  data: state.listing,
  auth: state.auth,
  confirmation: state.confirmation
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(select, mapDispatchToProps)(Congrats);
