import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cdpReducer from './cdpReducer';

export default combineReducers({
  form: formReducer,
  cups: cdpReducer
})
