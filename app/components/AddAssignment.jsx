import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';
import * as actions from '../actions/index';

class AddAssignment extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      title: '',
      description: '',
      dueDate: '',
    }

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleTitleChange(e){
    e.preventDefault();
    this.setState({title: e.target.value})
  }
  handleDescriptionChange(e){
    e.preventDefault();
    this.setState({description: e.target.value})
  }
  handleDateChange(e){
    e.preventDefault();
    this.setState({dueDate: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addAssignment(this.state.title, this.state.description, this.state.dueDate, this.props.assignments);
    this.setState({
      title: '',
      description: '',
      dueDate: '',
      showModal: false,
    })
  }

  render(){

    return(
      <div>
        <Button 
          bsStyle="primary"
          onClick={this.open} 
          block
        >
          Add Assignment  
          <Glyphicon glyph="plus-sign" style={{marginLeft: '10px'}}/>
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Add Assignment:</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <FormControl 
                  type="text" 
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                />
              </FormGroup>

              <FormGroup>
                <FormControl 
                  type="text" 
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                />
              </FormGroup>

              <FormGroup>
                <FormControl 
                  type="date" 
                  placeholder="Due Date"
                  value={this.state.dueDate}
                  onChange={this.handleDateChange}
                />

              </FormGroup>
              <Button type="submit" bsStyle="primary">
                Submit
              </Button>
            </form>
          </Modal.Body>

        </Modal>
      </div>

    )
  }
}

export default connect(null, actions)(AddAssignment);


