import React from 'react';
import './App.scss';
import './scripts/main';
import store from './redux/store';
import { useDispatch } from 'react-redux';
import Header from './Components/Header';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { About, View, FAQ, Cart, News, Contacts, Home } from './Pages';

function App() {
  return (
    <div>
      <Header component={Header} />
      <Route exact path="/" component={Home} />

      <div className="container">
        <Route exact path="/about" component={About} />
        <Route exact path="/view" component={View} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
