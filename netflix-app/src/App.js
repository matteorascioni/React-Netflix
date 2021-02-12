import React, { useEffect } from 'react';
import HomeScreen from './UI/Screens/HomeScreen/HomeScreen';
import LoginScreen from './UI/Screens/LogInScreen/LoginScreen';
import { auth } from './service/Firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        if(userAuth) {

        } else {

        }
      })

      return unsubscribe;
  }, [])

  const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
            <LoginScreen />
          ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
    </Router>
    </div>
  );
}

export default App;
