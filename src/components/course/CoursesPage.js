import React, { Component } from 'react';

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

  onClickSave() {
    alert(`Saving ${this.state.course.title}`);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <hr/>
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

export default CoursesPage;
