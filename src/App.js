import { BrowserRouter as Router, Route} from 'react-router-dom'

import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import {v4 as uuidv4 } from 'uuid';
import axios from 'axios'

class App extends Component {

    state = {
      todos: []
    }

    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data}))
    }

    getComplete = (id) => {
      this.setState( { todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      }) 
    });
    }

    // Delete an Item
    delTodo = (id) => {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState( {todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
      
    }
    
    // Add todo 
    addTodo = (title) => {
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title, 
        completed: false
      }).then (res => this.setState({ todos: [...this.state.todos, res.data]}) )
      
    }

    // Rendering the elements on the page
    render() {
      console.log(this.state.todos)
      return (
        <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render = {props => (
              <React.Fragment>
                <Todos delTodo = {this.delTodo} getComplete = {this.getComplete} todos={this.state.todos} />
                <AddTodo addTodo={this.addTodo}/> 
              </React.Fragment>
            )}/>

            <Route path="/about" component={About} />
            
          </div>               
      </div>
      </Router>
      )      
    }
  }

  
  



export default App;
