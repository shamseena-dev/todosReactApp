import React from 'react'

const Todos = ({todos}) => {
    const todosList = todos.length ? (todos.map(todo => {
    return(
    <div className ="collection-item" key={todo.id}>
      <span>{todo.task}</span>
      <button  className="btn-floating btn-large waves-effect waves-light red btn-small"> X</button>
    </div>)})) :
    (<p> No more Todos left!!</p>)
    return(
        <div className="collection center">
            {todosList}
        </div>
    )
}
export default Todos;