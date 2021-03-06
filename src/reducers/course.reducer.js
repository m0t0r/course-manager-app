import {
  LOAD_COURSES_SUCCESS,
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS
} from './../actions/course.actions';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case CREATE_COURSE_SUCCESS: {
      return [...state, Object.assign({}, action.course)];
    }
    case UPDATE_COURSE_SUCCESS: {
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    }

    case LOAD_COURSES_SUCCESS: {
      return [...action.courses];
    }
    default: {
      return state;
    }
  }
}
