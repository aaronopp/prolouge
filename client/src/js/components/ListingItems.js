import React from 'react';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';

export default ({ items = [] }) => (
  <Tiles fill={true} flush={true} selectable={true}>
    {items.map((item, i) => (<Tile key={item.title + i}>
      <Anchor
        path={`/confirmation/${i}`}
        className='active'>
        <Card thumbnail={item.thumbnail}
          heading={item.title}
          label={item.authors.join(', ')}
        />
      </Anchor>
    </Tile>))}
  </Tiles>
);
