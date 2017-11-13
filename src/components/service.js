import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/Nav.css';
import '../stylesheets/custom.css';
import Header from './header';

class Service extends React.Component{
  render(){
    return(
      <div className="services">
        <Header />
      </div>
    )
  }
}

export default Service;

