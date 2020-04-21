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
  deleteTodo = (id) => {
    console.log(id);
  }
  render(){
    return (
      <div className="center container blue-grey center">
        <h2 className="center card-action"> Todo-list Managing App</h2>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
    }
}

export default App;
