import React from 'react'

export default class Todo extends React.Component {
  render() {
  const { todo } = this.props;
    return (
      <div key={todo.id}>{todo.name}</div>
    );
  }
}
