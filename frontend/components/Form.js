import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      initialValues: '',
    };
  }

  // handleChange = (e) => {
  //   this.setState({ ...this.state, initialValues: e.target });
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();

  // }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
      <input 
      onChange={this.props.onChange}
      type="text" 
      placeholder="Add Todo"
      value={this.props.value}>
      </input>
      <br/>
      <button type="submit">Add Todo</button>
      <br />
      <button type="button">Clear Completed</button>
      </form>
    )
  }
}
