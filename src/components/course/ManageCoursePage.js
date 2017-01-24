import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from './../../actions/course.actions';
import CourseForm from './CourseForm';

class ManageCoursePage extends Component {

  constructor(state, props){
    super(state, props);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    };
  }

  render() {
    return (
      <div>
        <CourseForm
          allAuthors={[]}
          course={this.state.course}
          errors={this.state.errors}
          onSave=""
          onChange=""
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    course: {
      id: '',
      title: '',
      watchHref: '',
      authorId: '',
      length: '',
      category: ''
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
