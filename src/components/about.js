import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/Nav.css';
import '../stylesheets/custom.css';
import Header from './header';

class About extends React.Component{
  render(){
    return(
      <div className="about">
        <Header />
      </div>
    )
  }
}

export default About;