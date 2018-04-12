import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../../config/firebase';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
          Sign in
        </button>
      </div>
    );
  }
}

export default SignIn;