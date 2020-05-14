import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
//Components
import Navbar from './components/Navbar';
//Pages
import Home from './pages/home';
import Login from './pages/login';
import signup from './pages/signup';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={signup}/>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
