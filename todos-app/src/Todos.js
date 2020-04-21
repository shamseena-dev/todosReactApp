import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todosList = todos.length ? (todos.map(todo => {
    return(
    <div className ="collection-item blue-text" key={todo.id}>
      <span>{todo.task}</span>
      <button  className="btn-floating btn-large waves-effect waves-light red btn-small secondary-content" onClick ={() => {deleteTodo(todo.id)}}> X</button>
    </div>)})) :
    (<p> No more Todos left!!</p>)
    return(
        <div className="collection center">
            {todosList}
        </div>
    )
}
export default Todos;