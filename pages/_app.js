import React from 'react'
import App, {Container} from 'next/app'
import '../styles.css'
import * as firebase from "firebase/app";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBbwPG75SxAlHVLlgvgiXdRf0abs0EGpvU",
    authDomain: "wannawash.nl",
    databaseURL: "https://washingtime-d095c.firebaseio.com",
    projectId: "washingtime-d095c",
    storageBucket: "washingtime-d095c.appspot.com",
    messagingSenderId: "146960681795",
    appId: "1:146960681795:web:3d3081c9d25998001f3df6"
};
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({Component, pageProps}) {
    if (!firebase.apps.length) {
        firebase.initializeApp(config)
    }
    return <Component {...pageProps} />
}