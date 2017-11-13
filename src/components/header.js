import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';

class Header extends Component{
  render(){
    return(
      
      <header className="banner navbar navbar-default navbar-static-top dark-header" role="banner" data-transparent-header="true">
      <nav className="navbar navbar-default navbar-static-top" role="navigation">
        <div className="col-md-4">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          </button>
          <div className="navbar-header">
            <a className="navbar-brand" href="/">ITBEEZONE</a>
          </div>
        </div>
        <div className="col-md-8">
           <div className="col-md-12">
            <div className="navbar-collapse nav-collapse collapse pull-right">
              <ul className="nav navbar-nav pull-right">
                <li className="dropdown">
                  <span>Email:&nbsp;&nbsp; test@yopmail.com</span>
                </li>
                <li className="dropdown">
                  <span>Phone:&nbsp;&nbsp; +91-8526916472</span>
                </li>
                <li className="pull-left"><span>|</span></li>
                <li className="pull-left"><SocialIcon network="twitter" color="#000" style={{ height: 25, width: 25 }} /></li>
                <li className="pull-left"><SocialIcon network="facebook" color="#000" style={{ height: 25, width: 25 }} /></li>
                <li className="pull-left"><SocialIcon network="pinterest" color="#000"style={{ height: 25, width: 25 }} /></li>
                <li className="pull-left"><SocialIcon network="google" color="#000" style={{ height: 25, width: 25 }} /></li>
                <li className="pull-left"><SocialIcon network="linkedin" color="#000" style={{ height: 25, width: 25 }} /></li>
              </ul>
            </div>
          </div>
          <div className="col-md-12">
            <div className="navbar-collapse nav-collapse collapse pull-right">
              <ul className="nav navbar-nav pull-right">
                <li className="dropdown">
                  <a href="/" className="text-right">Home </a> 
                  <div className="nav-border"></div>
                </li>
                <li className="dropdown">
                  <a href="/blog" className="text-right">Blog</a>
                  <div className="nav-border"></div>
                </li>
                <li className="dropdown">
                  <a href="services" className="text-right">Services</a>
                  <div className="nav-border"></div>
                </li>
                <li className="dropdown">
                  <a href="portfolio" className="text-right">Portfolio</a>
                  <div className="nav-border"></div>
                </li>
                <li className="dropdown">
                  <a href="clients" className="text-right">Clients</a>
                  <div className="nav-border"></div>
                </li>
                <li className="dropdown">
                  <a href="technologies" className="text-right">Technologies</a>
                  <div className="nav-border"></div>
                </li>
                <li className="dropdown">
                  <a href="about" className="text-right">About</a>
                  <div className="nav-border"></div>
                </li>
                <li className="dropdown">
                  <a href="contact" className="text-right">Contact</a>
                  <div className="nav-border"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
    )
  }
}

export default Header;

