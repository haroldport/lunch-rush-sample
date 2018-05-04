import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBFIKGgUS-UH3VqjcFjCZCSWxMVaDirmDA',
  authDomain: 'lunch-rush-5281f.firebaseapp.com',
  databaseURL: 'https://lunch-rush-5281f.firebaseio.com',
  projectId: 'lunch-rush-5281f',
  storageBucket: 'lunch-rush-5281f.appspot.com',
  messagingSenderId: '812601295416'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();