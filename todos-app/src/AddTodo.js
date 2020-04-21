import React, { Component } from 'react'

class AddTodo extends Component{
    state = {
        task : ''
    }
    handleChange = (e) =>{
        this.setState({
            task: e.target.value
        })
     
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            task: ''
        })
    }
    render(){
    return (
           <div className="card">
            <div className="card-content">
                <h5 className="blue-text">Add New Todo Tasks:</h5>
                <form onSubmit={this.handleSubmit}>                           
                    <input type="text" placeholder="Add New Todo"  onChange={this.handleChange} value={this.state.task}></input>
                    <button className="btn waves-effect waves-light" type="submit">Add Task</button>
                </form>
                </div>
           </div>
    )}

}
export default AddTodo;