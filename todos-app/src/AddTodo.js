import React, { Component } from 'react'

class AddTodo extends Component{
    state = {
        newtodo : ''
    }
    handleChange = (e) =>{
        this.setState({
            newtodo: e.target.value
        })
        console.log(e.target.value)
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        
    }
    render(){
    return (
           <div className="card">
            <div className="card-content">
                <h5 className="blue-text">Add New Todo Tasks:</h5>
                <form onSubmit={this.handleSubmit}>                           
                    <input type="text" placeholder="Add New Todo" onChange={this.handleChange}></input>
                    <button className="btn waves-effect waves-light" type="submit">Click to Add</button>
                </form>
                </div>
           </div>
    )}

}
export default AddTodo;