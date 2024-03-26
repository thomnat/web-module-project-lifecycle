import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      initialValues: '',
    };
  }

  handleSubmit = (e) => {
    this.setState({ ...this.state, initialValues: e.target });
  }
  render() {
    return (
      <>
      <input type="text" placeholder="Add Todo"></input>
      <br/>
      <button onClick={this.handleSubmit}>Add Todo</button>
      <br />
      <button>Clear Completed</button>
      </>
    )
  }
}
