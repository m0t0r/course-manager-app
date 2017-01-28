import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import CourseForm from './CourseForm';

describe('Component: CourseForm', () => {

  function setup(saving = false) {
    let props = {
      course: {},
      errors: {},
      saving: saving,
      onSave: () => {},
      onChange: () => {}
    };

    return shallow(<CourseForm {...props}/>);
  }

  it('should be able to render form and h1', () => {
    const wrapper = setup();

    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toBe('Manage Course');
  });

  it('should be able to label save button as "Save" when not saving', () => {
    const wrapper = setup();
    const submitButton = wrapper.find('input').props().value;

    expect(submitButton).toBe('Save');
  });

  it('should be able to label save button as "Saving..." when saving', () => {
    const wrapper = setup(true);
    const submitButton = wrapper.find('input').props().value;

    expect(submitButton).toBe('Saving...');
  });
});
