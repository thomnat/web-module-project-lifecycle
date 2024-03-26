import React from 'react'
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    return (
      <>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo}/>
       ))}
        </>
    );
  }
}
