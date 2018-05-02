import { SESSION_LOAD, SESSION_LOGIN } from '../actions';
import { createReducer } from './utils';

const initialState = {
  appId: 378391782635026,
  client_secret: 'e5ccfbb0213af84f1bf0038fcb245cc0',
  fields: 'name,email,picture',
  accessToken: undefined,
};

const handlers = {
  [SESSION_LOAD]: (state, action) => action.payload,
  [SESSION_LOGIN]: (state, action) => {
    console.log(action.payload);
    if (!action.error) {
      return {
        ...state,
        accessToken: action.payload.accessToken
      };
    }
    return { error: action.payload.message };
  },
};

export default createReducer(initialState, handlers);
