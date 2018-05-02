import React from 'react';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';

export default ({ features = [] }) => (
  <ul className='landing__feature-list'>
    {features.map(feature => (<li className='landing__feature-list__item'>
      <Heading tag='h3'>
        {feature.title}
      </Heading>
      {feature.copy}
    </li>))}
  </ul>
);
