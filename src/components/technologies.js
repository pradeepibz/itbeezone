import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/Nav.css';
import '../stylesheets/custom.css';
import Header from './header';

class Technology extends React.Component{
  render(){
    return(
      <div className="technologies">
        <Header />
      </div>
    )
  }
}

export default Technology;