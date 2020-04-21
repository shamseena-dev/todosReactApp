import React, { Component } from 'react'

class AddTodo extends Component{
    state = {
        newtodo : ''
    }
    render(){
    return (
           <div className="card">
            <div className="card-content">
                <h5 className="blue-text">Add New Todo Tasks:</h5>
                <form>                           
                    <input type="text" placeholder="Add New Todo"></input>
                    <button class="btn waves-effect waves-light" type="submit">Click to Add</button>
                </form>
                </div>
           </div>
    )}

}
export default AddTodo;