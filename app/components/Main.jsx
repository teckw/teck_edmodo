import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-bootstrap';

import * as actions from '../actions/index';

import AssignmentList from './AssignmentList';
import InfoContainer from './InfoContainer';
import AddAssignment from './AddAssignment';

// Component Styles
const styles = {
  header: {
    display: 'flex',
    margin: '10px',
    justifyContent: 'center',
    
    image: {
      width: '70px',
      height: '70px',
    }

  }
}

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      assignment: null,
    }

    this.itemClick = this.itemClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchAssignments();
  }

  itemClick(assignment) {
    this.props.fetchSubmissions(assignment.id);

    this.setState({
      assignment, 
    })
    
  }


  render() {

    return (
      <Grid>
        <Row>
          <div style={styles.header}>
            <img style={styles.header.image} src="https://upload.wikimedia.org/wikipedia/en/1/16/Edmodo_logo.svg" alt="Edmodo Logo" />          
            <h1>Edmodo Assignments</h1>
          </div>

          <Col md={4}>
            <AddAssignment 
              assignments={this.props.assignments.data}
            />
            <AssignmentList 
              itemClick={this.itemClick} 
              assignments={this.props.assignments.data} />
          </Col>
          
          <Col md={8}>
            <InfoContainer 
              submissions={this.props.submissions.data} 
              assignment={this.state.assignment} />
          </Col>

        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state){
  return {
    assignments: state.assignments,
    submissions: state.submissions
  }
}

export default connect(mapStateToProps, actions)(Main)
