import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((todos) => {
        console.log(todos)
        this.setState({ todos: todos.data })
  })
      .catch((err) => console.log(err));
  };

handleInputChange = (e) => {//handler to update new todo item in STATE
  e.preventDefault();
  this.setState({ newTodo: e.target.value })
}

handleAddTodo = () => {
  const { todos, newTodo } = this.state;
  const newTodoItem = { id: todos.length + 1, name: newTodo, completed: false };

  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newTodoItem)
  })
  .then(response => response.json())
  .then(data => {
    console.log('New todo added:', data);
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodoItem],
      newTodo: ''
    }));
  })
  .catch(err => console.error('Error adding todo:', err));
};



  render() {
    return (
      <>
      <TodoList todos={this.state.todos} />
      <br/>
      <Form 
      value={this.state.newTodo}
      onChange={this.handleInputChange}
      onSubmit={this.handleAddTodo}
      />
      </>
      
    )
  }
}
