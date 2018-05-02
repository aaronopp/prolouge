import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from 'grommet/components/App';

import { SESSION_LOGIN } from '../actions';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import NavBar from '../components/NavBar';

import Listing from '../screens/Listing';
import NotFound from '../screens/NotFound';
import LandingPage from '../screens/LandingPage';

class Main extends Component {
  render() {
    return (
      <App centered={false}>
        <Router>
          <Article>
            <NavBar {...this.props.auth} onLogin={this.props.onLogin} />
            <Section pad='none'
              justify='start'
              align='start'>
              <Switch>
                <Route exact={true} path='/' component={LandingPage} />
                <Route path='/listing' component={Listing} />
                <Route path='/*' component={NotFound} />
              </Switch>
            </Section>
          </Article>
        </Router>
      </App>
    );
  }
}

const select = state => ({
  auth: state.auth
});


const mapDispatchToProps = dispatch => ({
  onLogin: (payload) => {
    dispatch({
      type: SESSION_LOGIN,
      payload
    });
  }
});

export default connect(select, mapDispatchToProps)(Main);
