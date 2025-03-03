import React from "react";
import "./App.scss";
import { HomePage } from "./screens/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import firebase from "firebase";
import "firebase/firestore";
import { GamePage } from "./screens/Game";
import { AddLocations } from "./screens/AddLocations";

firebase.initializeApp({
  apiKey: "AIzaSyAqoZ0vfJCotYvF2Vzn6wP0smSqcSRNjMs",
  authDomain: "mapi-c1e47.firebaseapp.com",
  databaseURL:
    "https://mapi-c1e47-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mapi-c1e47",
  storageBucket: "mapi-c1e47.appspot.com",
  messagingSenderId: "325914929273",
  appId: "1:325914929273:web:94ed448366e2445db38ca8",
  measurementId: "G-KLTLYCSS41",
});

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/play">
          <GamePage />
        </Route>
        <Route path="/add-location-220">
          <AddLocations />
        </Route>
        <Route path="/">
          <HomePage></HomePage>
        </Route>
      </Switch>
    </Router>
  );
};

function App() {
  return <div className="App">
    <Routes/>
  </div>;
}

export default App;
