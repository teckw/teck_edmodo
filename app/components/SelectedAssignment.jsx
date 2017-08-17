import React, { Component } from 'react';
import Moment from 'moment';

// Component Styles
const styles = {
  selectedAssignment: {
    border: '1px solid #DDDDDD',
    padding: '0px 15px 20px',

    header: {
      display: 'flex',
    },

    dueDate: {
      marginLeft: 'auto',
    },

  }
}

const SelectedAssignment = ({assignment}) => {
  
  const dueDate = Moment(assignment.due_at).format('MMM Do YY');
  
  return (
    <div style={styles.selectedAssignment}>

      <div style={styles.selectedAssignment.header}>
        <h2>{assignment.title}</h2>
        <h5 style={styles.selectedAssignment.dueDate}>Due: {dueDate}</h5>
      </div>
      <h5>{assignment.description}</h5>

    </div>
  )
}

export default SelectedAssignment;