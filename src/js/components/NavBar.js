import React from 'react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import LoginIcon from 'grommet/components/icons/base/Login';
import FacebookLogin from 'react-facebook-login';


const UserListing = () => (<Menu responsive={true}
  icon={<LoginIcon />}
  label='Label'
  inline={false}
  primary={false}
  closeOnClick={false}>
  <Anchor href='#'
    className='active'>
  First action
  </Anchor>
  <Anchor href='#'>
  Second action
  </Anchor>
  <Anchor href='#'>
  Third action
  </Anchor>
</Menu>);

export default ({ appId, fields, accessToken, onLogin, ...props }) => (
  <Header className='header'>
    <Title>
      <Anchor className='header__title' path='/' label='faceBook' />
    </Title>
    <Box flex={true}
      justify='end'
      direction='row'
      responsive={false}>
      {accessToken ? <UserListing /> : <FacebookLogin
        appId={appId}
        autoLoad={true}
        fields={fields}
        callback={onLogin} />}
    </Box>
  </Header>
);
