import React, { Component } from 'react';

import './NewRestaurant.css';

class NewRestaurant extends Component {
  state = {
    name: ''
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { name } = this.state;

    return (
      <form className="NewRestaurant">
        <input
          type="text"
          value={name}
          placeholder="Name of Fine Establishment"
          onChange={event => this.setState({ name: event.target.value })}
        />
        <button onClick={this.handleSubmit} disabled={!name}>
          Submit
        </button>
      </form>
    );
  }
}

export default NewRestaurant;