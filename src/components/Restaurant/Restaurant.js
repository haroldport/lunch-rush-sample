import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Restaurant.css';

class Restaurant extends Component {
  render() {
    return (
      <article className="Restaurant">
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