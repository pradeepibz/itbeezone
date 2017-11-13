import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/Nav.css';
import '../stylesheets/custom.css';
import Header from './header';

class Client extends React.Component{
  render(){
    return(
      <div className="clients">
        <Header />
      </div>
    )
  }
}

export default Client;