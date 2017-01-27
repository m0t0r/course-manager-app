import { combineReducers } from 'redux';
import courseReducer from './course.reducer';
import authorReducer from './author.reducer';
import ajaxStatusReducer from './ajax-status.reducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  authors: authorReducer,
  ajaxCallsInProgress: ajaxStatusReducer
});

export default rootReducer;
