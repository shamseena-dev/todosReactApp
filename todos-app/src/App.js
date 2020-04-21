import React, {Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todos : [
      {id: 1 , task : "Buy groceries"},
      {id: 2 , task : "Pick up kid"},
      {id: 3 , task : "Finish courses"},
      {id: 4 , task : "Practise projects"}
    ]
  }
  render(){
    return (
      <div className="container">
        <h2 className="center blue-text"> Todo-list Managing App</h2>
        <Todos todos={this.state.todos} />
      </div>
    );
    }
}

export default App;
