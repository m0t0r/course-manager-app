import courseApi from '../api/mockCourseApi';
import { beginAjaxCall } from './ajax-status.actions';

export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';

export function loadCoursesSuccess(courses) {
  return { type: LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
  return { type: UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSuccess(course) {
  return { type: CREATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
  return function thunk(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses()
      .then(courses => dispatch(loadCoursesSuccess(courses)))
      .catch(e => console.error(`Error: ' ${e}`));
  };
}

export function saveCourse(course) {
  return function thunk(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course)
      .then(courses => {
        course.id
          ? dispatch(updateCourseSuccess(courses))
          : dispatch(createCourseSuccess(courses));
      })
      .catch(e => console.error(`Error: ' ${e}`));
  };
}
