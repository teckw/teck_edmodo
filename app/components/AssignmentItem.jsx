import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import Moment from 'moment';

export default class AssignmentItem extends Component {

  clickFunctions() {
    this.props.itemClick(this.props.assignment);
    this.props.clickHandler();
  }

  render() {

    const { assignment } = this.props
    const dueDate = Moment(assignment.due_at).format('MMM Do YY');
    
    var itemStyle = {
      backgroundColor: "white",
      border: '1px solid #EBEBEB',
      padding: '0px 10px 15px',
      cursor: 'pointer',
    }

    if(this.props.isSelected){
      itemStyle['backgroundColor'] = '#f2f2f2';
    }

    return (
      <div 
        style={itemStyle}
        onClick={this.clickFunctions.bind(this)}
      >
        <Media>
          <h3>{assignment.title}</h3>
          <h5>Due at: {dueDate}</h5>
        </Media>
      </div>
    )
  }
}