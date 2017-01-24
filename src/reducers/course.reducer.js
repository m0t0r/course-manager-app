import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from './../actions/course.actions';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case CREATE_COURSE: {
      return [...state, Object.assign({}, action.course)];
    }
    case LOAD_COURSES_SUCCESS: {
      return action.courses;
    }
    default: {
      return state;
    }
  }
}
