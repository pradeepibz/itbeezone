import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home'
import Blog from './blog'
import Service from './service'
import Portfolio from './portfolio'
import Client from './clients'
import Technology from './technologies'
import About from './about'
import Contact from './contact'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div class="container-fluid">
          <Route exact path="/" component={Home}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/services" component={Service}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/clients" component={Client}/>
          <Route exact path="/technologies" component={Technology}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
        </div>
      </Router>
    )
  }
}

export default App;
