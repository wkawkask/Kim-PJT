import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

//sample.js
import Sample from 'views/sample';






ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        render={props => <Sample {...props} /> }
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

