import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
//Components
import Navbar from './components/Navbar';
//Pages
import Home from './pages/home';
import Login from './pages/login';
import signup from './pages/signup';
import themeFile from './util/theme';
import jwtDecode from 'jwt-decode';
import AuthRoute from './util/AuthRoute';

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
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      
      <Router>
        <Navbar/>
        <div class="container">
          <Switch>
          <AuthRoute exact path="/" component={Home} authenticated = {authenticated}/>
          <AuthRoute exact path="/login" component={Login} authenticated = {authenticated}/>
          <AuthRoute exact path="/signup" component={signup} authenticated = {authenticated}/>
          </Switch>
        </div>
      </Router>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
