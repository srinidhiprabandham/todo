import React, { Component } from 'react';

import NavBar from './NavBar.js'
import TodoList from './TodoList.js'
import AddTaskForm from './AddTaskForm.js'

class App extends Component {
  constructor(){
    super();
    this.addTask = this.addTask.bind(this);
    this.state = { tasks: [
      { id: 1, complete: true, task: "Install NPM" },
      { id: 2, complete: false, task: "Get TODO app working !!" },
    ]}
  }

  addTask(task) {
    var tasks = this.state.tasks;
    tasks.push(task);
    this.setState({tasks: tasks});
  }

  render() {
    return (
      <div className='body'>
        <NavBar />

        <div className="container">

          <TodoList tasks={this.state.tasks}/>

          <br />
          <hr />

          <div className="row">
            <AddTaskForm task={this.state.tasks} addTask={ this.addTask }/>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
