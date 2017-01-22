import courseApi from '../api/mockCourseApi';

export const CREATE_COURSE = 'CREATE_COURSE';
export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';

export function createCourse(course) {
  return { type: CREATE_COURSE, course };
}

export function loadCoursesSuccess(courses) {
  return { type: LOAD_COURSES_SUCCESS, courses };
}


export function loadCourses() {
  return function thunk(dispatch) {
    return courseApi.getAllCourses()
      .then(courses => dispatch(loadCoursesSuccess(courses)))
      .catch(e => console.error(`Error: ' ${e}`));
  };
}
