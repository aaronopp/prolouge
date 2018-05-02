import React from 'react';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';

export default ({ items = [] }) => (
  <Tiles fill={true}>
    {items.map((item, i) => (<Tile key={item.title + i}>
      <Card thumbnail={item.thumbnail}
        heading={item.title}
        label={item.authors.join(', ')}
        description={item.description} />
    </Tile>))}
  </Tiles>
);
