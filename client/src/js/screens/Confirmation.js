import React from 'react';
import { connect } from 'react-redux';


import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Checkmark from 'grommet/components/icons/base/checkmark';
import Button from 'grommet/components/Button';
import Spinning from 'grommet/components/icons/Spinning';
import Toast from 'grommet/components/Toast';


const ChecklistItem = ({ children }) => (<div>
  <Heading margin='none' tag='h2'>
    <Checkmark /> &nbsp;{children}
  </Heading>
</div>);

const LandingPage = ({ data, match, postAll, confirmation, auth }) => (
  <Section pad='large'
    className='confirmation'
    justify='start'
    align='start' >
    {
      confirmation.posting
        ? <Spinning size='huge' /> : <div>
          <Heading margin='none'>
            {/* data.items[match.params.id].title */}
            {'Let Prologue work out the details with your Facebook Group!'}
          </Heading>
          <br />
          <ChecklistItem>
          Reading pace
          </ChecklistItem>
          <ChecklistItem>
          Virtual meeting format
          </ChecklistItem>
          <ChecklistItem>
          Book ordering
          </ChecklistItem>
          <ChecklistItem>
          Separate pages for interested members
          </ChecklistItem>
          <ChecklistItem>
          Facilitate and spur discussions
          </ChecklistItem>
          <Button label='Post'
            className='confirmation__button'
            onClick={() => postAll(auth)}
            primary={true}
          />
        </div>
    }
    {confirmation.error ? <Toast status='critical'>
        Error Posting, please retry.
    </Toast> : ''}
  </Section>
);


const select = state => ({
  session: state.session,
  data: state.listing,
  auth: state.auth,
  confirmation: state.confirmation
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  postAll: (auth) => {
    dispatch({ type: 'POSTING' });
    fetch(`https://32320057.ngrok.io/postall?access_token=${auth.accessToken}`, { method: 'GET' })
      .then(response => response.json())
      .then((response) => {
        dispatch({ type: 'POSTED' });
        ownProps.history.push('/congrats');
      })
      .catch(() => {
        dispatch({ type: 'POSTING_ERROR' });
      });
  }
});

export default connect(select, mapDispatchToProps)(LandingPage);
