import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage';

describe('Container: ManageCoursePage', () => {

  it('should be able to set error message when trying to save empty title', () => {
    const props = {
      course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
      actions: {},
      authors: []
    };
    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();

    expect(saveButton.prop('type')).toBe('submit');

    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.')
  });
});
