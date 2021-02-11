import React from 'react';
import HomeScreen from './UI/Screens/HomeScreen/HomeScreen';
import LoginScreen from './UI/Screens/LogInScreen/LoginScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
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
