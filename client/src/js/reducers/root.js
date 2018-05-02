import { combineReducers } from 'redux';

import auth from './auth';
import landing from './landing';
import listing from './listing';
import confirmation from './confirmation';

export default combineReducers({
  auth,
  listing,
  landing,
  confirmation
});
