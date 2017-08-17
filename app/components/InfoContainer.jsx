import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'react-bootstrap';

import SelectedAssignment from './SelectedAssignment';
import SubmissionsList from './SubmissionsList';

// Component Styles
const styles = {
  initialSelect: {
    position: 'relative',
    textAlign: 'center',
    border: '1px solid #EBEBEB',
    height: '230px',

    header: {
      position: 'absolute',
      top:'30%',
      left: '30%',
    }
  }
}

export default class InfoContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeKey: 1
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  renderAssignment() {
    if(this.props.assignment) {
      return (
        <div>
          <Nav bsStyle="tabs" onSelect={this.handleSelect}>
            <NavItem eventKey={1}>Assignment</NavItem>
            <NavItem eventKey={2}>Submissions</NavItem>
          </Nav>
          
          {this.state.activeKey == 1 ? <SelectedAssignment assignment={this.props.assignment}/> : null}
          {this.state.activeKey == 2 ? <SubmissionsList submissions={this.props.submissions}/>  : null}
          
        </div>

      )
    } else {
      return (
        <div style={styles.initialSelect}>
          <h1 style={styles.initialSelect.header}>Select an Assignment</h1>
        </div>
      )
    }
  }

  handleSelect(selectedKey, event) {
    this.setState({ activeKey: selectedKey})
  }

  render(){

    return (
      <div>
        {this.renderAssignment()}
      </div>
    )
  }
}
