import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
//Components
import Navbar from './components/Navbar';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
//Pages
import Home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import themeFile from './util/theme';
import jwtDecode from 'jwt-decode';
import AuthRoute from './util/AuthRoute';

import { logoutUser, getUserData } from './redux/actions/userActions';

const theme = createMuiTheme(themeFile);


const token = localStorage.FBIdToken;
let authenticated;
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    window.location.href = '/login';
    authenticated = false;
  } else {
    authenticated = true;
  }
  console.log(decodedToken);
  console.log(authenticated);
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
        <Navbar/>
        <div class="container">
          <Switch>
          <Route exact path="/" component={Home} authenticated = {authenticated}/>
          <AuthRoute exact path="/login" component={login} authenticated = {authenticated} />
          <AuthRoute exact path="/signup" component={signup} authenticated = {authenticated}/>
          </Switch>
        </div>
      </Router>
    
    </Provider>
    </MuiThemeProvider>
  );
}

export default App;
