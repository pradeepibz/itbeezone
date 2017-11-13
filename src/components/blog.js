import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/Nav.css';
import '../stylesheets/custom.css';
import Header from './header';

class Blog extends React.Component{
  render(){
    return(
      <div className="blog">
        <Header />
      </div>
    )
  }
}

export default Blog;