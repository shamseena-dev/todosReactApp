import React, {Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo';

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
    const todos = this.state.todos.filter(todo => {return todo.id!==id})
    this.setState({
      todos
    })
  }
  addTodo =(todo) =>{
    
    todo.id = (this.state.todos[this.state.todos.length-1].id )+ 1;
    const todos = [...this.state.todos, todo]
    this.setState({
      todos 
    })
       
  }
  render(){
    return (
      <div className="container center">
        <div className="card blue-grey">
        <h2 className="center white-text"> Todo-list Managing App</h2>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        </div>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
    }
}

export default App;
