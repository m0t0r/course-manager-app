import expect from 'expect';
import courseReducer from './course.reducer';
import * as actions from '../actions/course.actions';

describe('Reducers: CourseReducer', () => {

  it('should be able to add new course when passed CREATE_COURSE_SUCCESS', () => {
    const initialState = [
      {title: 'Course 1'},
      {title: 'Course 2'}
    ];

    const newCourse = {title: 'Course 3'};

    const action = actions.createCourseSuccess(newCourse);

    const newState = courseReducer(initialState, action);

    expect(newState.length).toBe(3);
    expect(newState[newState.length - 1].title).toBe('Course 3');
  });

  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const course = {id: 'B', title: 'New Title'};
    const action = actions.updateCourseSuccess(course);

    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id === course.id);
    const untouchedCourse = newState.find(a => a.id === 'A');
    console.log('untouchedCourse', untouchedCourse);
    expect(updatedCourse.title).toEqual('New Title');
    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});
