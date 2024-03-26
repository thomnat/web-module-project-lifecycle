import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
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




  render() {
    return (
      <>
      <TodoList todos={this.state.todos} />
      <br/>
      <Form />
      </>
      
    )
  }
}
