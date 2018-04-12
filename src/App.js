import React, { Component } from 'react';

import SignIn from './components/SignIn/SignIn';
import CurrentUser from './components/User/CurrentUser';
import { auth } from './config/firebase';

import './App.css';

class App extends Component {

  state = {
    currentUser: null
  };

  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser });
    });
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
          { currentUser && <CurrentUser user={currentUser} />  }
        </div>
      </div>
    );
  }
}

export default App;
