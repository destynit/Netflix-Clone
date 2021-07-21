import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles'
import {App} from './App';
import { FirebaseContext } from './context/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD8LnOmmA3lVhe4NerWcMWVRCum9XT03Pc",
    authDomain: "clone-netflix-12d76.firebaseapp.com",
    projectId: "clone-netflix-12d76",
    storageBucket: "clone-netflix-12d76.appspot.com",
    messagingSenderId: "443892607163",
    appId: "1:443892607163:web:8631a8181850a98d90219e",
    measurementId: "G-PHSRXP7B5H"
  };

const firebase = window.firebase.initializeApp(firebaseConfig);
    

ReactDOM.render (
    <>
        <FirebaseContext.Provider value={{firebase: window.firebase}}>
            <GlobalStyles/>
            <App />
        </FirebaseContext.Provider>
    </>, 
    document.getElementById('root'));


