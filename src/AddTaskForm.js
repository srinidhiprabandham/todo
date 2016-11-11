import React, { Component } from 'react';

class AddTaskForm extends Component {
  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    //There must be a React way of getting this.
    var element = e.target.firstChild.firstChild.value;
    this.props.addTask({task: element, complete: false});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group row'>
          <input type='text' ref='item' className='form-control' placeholder='Add a new Task'/>
        </div>
      </form>
    )
  }
}

export default AddTaskForm;
