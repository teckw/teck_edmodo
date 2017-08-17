import React, { Component } from 'react';
import { Media, Collapse, Glyphicon, Button, Well } from 'react-bootstrap';
import Moment from 'moment';

// Component styles
const styles = {
  submission_item: {
    padding: '10px',
    border: '1px solid #DDDDDD',
  }
}

export default class SubmissionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }


  render(){

    const { submission } = this.props
    const date_submitted = Moment(submission.submitted_at).format('MMM Do YY');
    
    return (
      <div style={styles.submission_item} onClick={ () => this.setState({ open: !this.state.open }) }>
        <Media>
          
          <Media.Left>
            <img src={submission.creator.avatars.large} alt="avatar" />
          </Media.Left>
          
          <Media.Body>
            <h3>{submission.creator.first_name} {submission.creator.last_name}</h3>
            <h5>turned in {date_submitted}</h5>          
          </Media.Body>

          <Media.Right align="middle">
            <Glyphicon 
              style={{fontSize: '4em', color: '#AAAAAA'}}
              glyph={this.state.open ? "triangle-top" : "triangle-bottom"}
            />
          </Media.Right>

        </Media>
        
        <Collapse in={!this.state.open}>
          <Well>
            <p>{submission.content}</p>
          </Well>
        </Collapse>

      </div>

    )
  }
}