import React, { Component } from 'react'
import PropTypes from "prop-types"



export class TodoItem extends Component {
    // Stylizing the todoItem
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? "line-through" : "none", 
            background: "#f4f4f4", 
            padding: "10px",
            borderBottom: "1px #ccc dotted"
        }
    };

    btnStyle = () => {
        return {
            background: '#ff0000',
            color: '#fff',
            border: 'none',
            padding: '5px 6px',
            cursor: 'pointer',
            float: 'right'
        }
    }

    // Delete a Todo Item
    delTodo = () => {

    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div className="todo-item" style={this.getStyle()}>                
                <p>
                    <input type="checkbox" onChange={this.props.getComplete.bind
                    (this, id)} />
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={this.btnStyle()}>X</button>
                </p>
            </div>
        )   
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    getComplete: PropTypes.func.isRequired, 
    delTodo: PropTypes.func.isRequired
}


export default TodoItem
