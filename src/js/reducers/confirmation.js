import { createReducer } from './utils';

const initialState = {
  posting: false,
  success: false,
  error: false,
};

const handlers = {
  POSTING: state => ({
    ...state,
    posting: true,
  }),
  POSTED: state => ({
    ...state,
    posting: false,
    success: true,
    error: false
  }),
  POSTING_ERROR: state => ({
    ...state,
    posting: false,
    success: false,
    error: true
  }),
};

export default createReducer(initialState, handlers);
