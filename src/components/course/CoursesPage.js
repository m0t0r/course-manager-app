import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as courseActions from '../../actions/course.actions';
import CourseList from './CourseList';

class CoursesPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.redirectToCoursePage = this.redirectToCoursePage.bind(this);
  }

  redirectToCoursePage(event) {
    event.preventDefault();
    browserHistory.push('/course')
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <button className="btn btn-primary" onClick={this.redirectToCoursePage}>Add course</button>
        <CourseList courses={this.props.courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
