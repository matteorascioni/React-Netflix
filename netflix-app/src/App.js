import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen from './UI/Screens/HomeScreen/HomeScreen';
import LoginScreen from './UI/Screens/LogInScreen/LoginScreen';
import ProfileScreen from './UI/Screens/ProfileScreen/ProfileScreen';
import { auth } from './service/Firebase';
import { login, logout, selectUser } from './features/userSlice';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {

  // REDUX USER AUTHENTICATION
  const user =useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        if(userAuth) {
          dispatch(
            login({
              uid: userAuth.uid,
              email: userAuth.email,
            })
          );
        } else {
          dispatch(logout());
        }
      });

      return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
            <LoginScreen />
          ) : (
          <Switch>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
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
