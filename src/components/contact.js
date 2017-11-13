import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/Nav.css';
import '../stylesheets/custom.css';
import Header from './header';

class Contact extends React.Component{
  render(){
    return(
      <div className="contact">
        <Header />
      </div>
    )
  }
}

export default Contact;