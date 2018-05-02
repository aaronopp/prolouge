import React from 'react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import LoginIcon from 'grommet/components/icons/base/Login';
import FacebookLogin from 'react-facebook-login';


const UserListing = ({ groups = [] }) => (<Menu responsive={true}
  icon={<LoginIcon />}
  label='Facebook Groups'
  inline={false}
  primary={false}
  closeOnClick={false}>
  { groups.map(group => (<Anchor key={`${group.id}`}
    path={`/listing/${group.id}`}
    className='active'>
    {group.name}
  </Anchor>))}
</Menu>);

export default ({ appId, fields, accessToken, scopes, onLogin, groups, ...props }) => (
  <Header className='header'>
    <Title>
      <Anchor className='header__title' path='/' label='Prologue' />
    </Title>
    <Box flex={true}
      justify='end'
      direction='row'
      responsive={false}>
      {accessToken ? <UserListing groups={groups} /> : <FacebookLogin
        appId={appId}
        autoLoad={true}
        textButton='Login'
        fields={fields}
        scopes={scopes}
        onClick={() => {}}
        callback={onLogin} />}
    </Box>
  </Header>
);
