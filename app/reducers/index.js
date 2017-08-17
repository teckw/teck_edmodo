import { combineReducers } from 'redux';

import assignmentsReducer from './reducer_assignments';
import submissionsReducer from './reducer_submissions';

const rootReducer = combineReducers({
  assignments: assignmentsReducer,
  submissions: submissionsReducer,
});

export default rootReducer;
