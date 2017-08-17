import React, { Component } from 'react';
import SubmissionItem from './SubmissionItem';


export default class SubmissionsList extends Component {
  
  renderSubmissionItem(){
    if(this.props.submissions){
      return this.props.submissions.map(submission => {
        return <SubmissionItem submission={submission} key={submission.id}/>      
      })
    }
  }

  render(){
    return (
      <div>
        {this.renderSubmissionItem()}
      </div>
    )
  }
}

