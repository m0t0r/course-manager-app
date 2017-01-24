import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from './../../actions/course.actions';

class ManageCoursePage extends Component {

  constructor(state, props){
    super(state, props);
  }

  render() {
    return (
      <div>
        <h1>Manage Course Page</h1>
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  prop: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
