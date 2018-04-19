import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDeai9QaZCi5ccOwonxPhL8gfq74tduq70',
    authDomain: 'lunch-rush-sample.firebaseapp.com',
    databaseURL: 'https://lunch-rush-sample.firebaseio.com',
    projectId: 'lunch-rush-sample',
    storageBucket: 'lunch-rush-sample.appspot.com',
    messagingSenderId: '502309617282'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();