import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import './Restaurant.css';

class Restaurant extends Component {
  render() {
    const { name, handleSelect, handleUnselect, votes } = this.props;
    return (
      <article className="Restaurant">
        <h3>{name}</h3>
        <ul>
          { votes && map(votes, (vote, key) => <li key={key}>{ vote} </li>)}
        </ul>
        <button onClick={handleSelect}>
          Yea, I'd go there
        </button>
        <button className="destructive" onClick={handleUnselect}>
          Nah, nevermind
        </button>
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;