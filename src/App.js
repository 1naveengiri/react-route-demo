import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Errorpage from './components/Errorpage';
import Navgination from './components/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navgination/>
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/about' component={Aboutus}/>
            <Route path='/contact' component={Contactus}/>
            <Route path='' component={Errorpage}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
