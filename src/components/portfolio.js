import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/Nav.css';
import '../stylesheets/custom.css';
import Header from './header';

class Portfolio extends React.Component{
  render(){
    return(
      <div className="portfolioo">
        <Header />
      </div>
    )
  }
}

export default Portfolio;