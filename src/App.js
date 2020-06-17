import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Landing from './Containers/Landing';
import Atention from './Containers/Atention';
import Creativity from './Containers/Creativity';
import Games from './Containers/Games';
import Login from './Containers/Login';
import Memory from './Containers/Memory';
import Profile from './Containers/Profile';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/Atention" component={Atention}/>
      <Route exact path="/Creativity" component={Creativity}/>
      <Route exact path="/Games" component={Games}/>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/Memory" component={Memory}/>
      <Route exact path="/Profile" component={Profile}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
