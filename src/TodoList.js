import React, { Component } from 'react';

import TaskItem from './TaskItem.js'

class TodoList extends Component {
  render(){
    var Task= function(task,i){
      //Here i is needed as the index as it wont render
      //without a uniq key.
      return(<TaskItem key={i} task={task}/>)
    }
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <ul>{this.props.tasks.map(Task)}</ul>
        </div>
      </div>
    )
  }
}

export default TodoList;
