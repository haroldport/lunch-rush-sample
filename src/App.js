import React, { Component } from 'react';
import SignIn from './components/SignIn/SignIn';
import { auth, database } from './config/firebase';
import CurrentUser from './components/User/CurrentUser';
import NewRestaurant from './components/Restaurant/NewRestaurant';
import Restaurants from './components/Restaurant/Restaurants';

import './App.css';

class App extends Component {

  state = {
    currentUser: null,
    restaurants: null
  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser });

      database.ref('/restaurants').on('value', (snapshot) => {
        this.setState({ restaurants: snapshot.val() });
      })
    })
  }

  render() {
    const { currentUser, restaurants } = this.state;

    return (
      <div className="App">
        <header className="App--header">
          <h1>Lunch Rush</h1>
        </header>
        <div>
          { !currentUser && <SignIn /> }
          { currentUser 
            &&
            <div>
              <NewRestaurant />
              <Restaurants restaurants={restaurants} user={currentUser} />
              <CurrentUser user={currentUser} /> 
            </div> 
          }
        </div>
      </div>
    );
  }
}

export default App;
