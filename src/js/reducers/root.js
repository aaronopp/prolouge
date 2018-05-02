import { combineReducers } from 'redux';

import nav from './nav';
import auth from './auth';
import landing from './landing';
import listing from './listing';

export default combineReducers({
  nav,
  auth,
  listing,
  landing
});
