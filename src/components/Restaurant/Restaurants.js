import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Restaurant from './Restaurant';
import './Restaurants.css';

class Restaurants extends Component {

  render () {
    return (
      <section className="Restaurants">
      </section>
    );
  }
  
}

Restaurants.propTypes = {
  user: PropTypes,
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;