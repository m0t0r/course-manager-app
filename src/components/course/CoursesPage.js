import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/course.actions';

class CoursesPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: '' }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course });
  }

  onClickSave(e) {
    e.preventDefault();
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return (
      <li className="list-group-item" key={index}>{course.title}</li>
    );
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <hr/>
        <ul className="list-group">
          {this.props.courses.map(this.courseRow)}
        </ul>
        <br/>
        <h2>Add course</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" value={this.state.course.title} onChange={this.onTitleChange} id="title" aria-describedby="title" placeholder="Enter title"/>
            <br/>
            <button type="submit" className="btn btn-primary" onClick={this.onClickSave}>Save</button>
          </div>
        </form>
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
