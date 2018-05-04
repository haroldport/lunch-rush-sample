import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { database } from '../../config/firebase';

import Restaurant from './Restaurant';
import './Restaurants.css';

class Restaurants extends Component {

  handleSelect = key => {
    const { user } = this.props;
    database.ref('/restaurants')
            .child(key)
            .child('votes')
            .child(user.uid)
            .set(user.displayName);
  }

  handleUnselect = key => {
    const { user } = this.props;
    database.ref('/restaurants')
            .child(key)
            .child('votes')
            .child(user.uid)
            .remove();
  }

  render () { 
    const { restaurants } = this.props; 
    return (
      <section className="Restaurants">
        {
          map(restaurants, (r, key) => {
            return <Restaurant 
              key={key} 
              {...r} 
              handleSelect={() => this.handleSelect(key)}
              handleUnselect={() => this.handleUnselect(key)}
            />
            }
          )
        }
      </section>
    );
  }
  
}

Restaurants.propTypes = {
  user: PropTypes.object,
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;
