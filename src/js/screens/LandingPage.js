import React from 'react';
import { connect } from 'react-redux';


import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';

import NavBar from '../components/NavBar';
import FeatureList from '../components/Features';
import Box from 'grommet/components/Box';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';


const LandingPage = ({ data }) => (
  <div>
    <Hero background={<Image src={data.heroImg}
      fit='cover'
      full={true} />}
    >
      <Box direction='row'
        justify='center'
        align='center'>
        <Box
          basis='1/1'
        >
          <Heading margin='none' className='landing__hero__copy'>
            {data.copy}
          </Heading>
        </Box>
      </Box>
    </Hero>

    <FeatureList features={data.features} />
  </div>
);


const select = state => ({
  session: state.session,
  data: state.landing
});

export default connect(select)(LandingPage);
