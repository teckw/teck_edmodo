import React, { Component } from 'react';
import AssignmentItem from './AssignmentItem';

export default class AssignmentList extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedItem: null,
    }
  }

  clickHandler(idx) {
    this.setState({selectedItem: idx})
  }

  render() {

    let items;
    if (this.props.assignments) {
      items = this.props.assignments.map((assignment, idx) => {
        
        let is_selected = this.state.selectedItem == idx;
        
        return <AssignmentItem 
          key={assignment.id} 
          itemClick={this.props.itemClick} 
          clickHandler = {this.clickHandler.bind(this, idx)}
          assignment={assignment}
          isSelected={is_selected}
        />
          
      }) 
    } else {
      items = null;
    }
    
    return (

      <div>
        {items}
      </div>
    )
  }
}