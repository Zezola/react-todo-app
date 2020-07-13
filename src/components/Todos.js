import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {
    
    render () {
        return this.props.todos.map((todo) => (
            <TodoItem getComplete = {this.props.getComplete} delTodo = {this.props.delTodo} key ={todo.id} todo = {todo}/>
        ))
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    getComplete: PropTypes.func.isRequired, 
    delTodo: PropTypes.func.isRequired
}

export default Todos;