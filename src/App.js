import React, { Component } from 'react';
import SignIn from './components/SignIn/SignIn';
import { auth } from './config/firebase';
import CurrentUser from './components/User/CurrentUser';
import NewRestaurant from './components/Restaurant/NewRestaurant';

import './App.css';

class App extends Component {

  state = {
    currentUser: null
  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser });
    })
  }

  render() {
    const { currentUser } = this.state;

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
              <CurrentUser user={currentUser} /> 
            </div> 
          }
        </div>
      </div>
    );
  }
}

export default App;
