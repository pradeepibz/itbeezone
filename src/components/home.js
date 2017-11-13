import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/Nav.css';
import '../stylesheets/custom.css';
import Header from './header';
import HomeSection from './homesection';
import ServiceSection from './servicesection';
import FeedbackSection from './feedbackSection';
import Technology from './technologySection';
import About from './aboutSection';
import ContactSection from './contactSection';

class Home extends React.Component {

  componentDidMount(){
    window.addEventListener('scroll', (event) => {
      var serviceDiv = document.querySelector(".service-section");
      var serBox = document.querySelectorAll(".serv-box")
      var navBar = document.querySelector(".navbar")
      var feedBox = document.querySelectorAll(".quote")
      var feedDiv = document.querySelector(".feedback-section")
      var techDiv = document.querySelector(".technology-section")
      var techlr = document.querySelectorAll(".slide-lr");
      var techrl = document.querySelectorAll(".slide-rl");
      var techbt = document.querySelectorAll(".slide-bt");
      var abtDiv = document.querySelector(".about-section");
      var abtbox = document.querySelector(".about-description");
      var serSec = serviceDiv.offsetTop - document.body.scrollTop;
      var feedSec = feedDiv.offsetTop - document.body.scrollTop;
      var techSec = techDiv.offsetTop - document.body.scrollTop;
      var abtsec = abtDiv.offsetTop - document.body.scrollTop;
       if (serSec <= 0){
        navBar.style.background = "#1EC09F";
       }else if (serSec > 0){
        navBar.style.background = "transparent";
       }
       console.log(feedSec)
       console.log(serSec)
       console.log("serSec")
       if(serSec <= 400){
          for (var i=0; i < serBox.length; i++){
            if (serBox[i].classList.contains("service-slideup") == false){
              serBox[i].className += " service-slideup"
            }
          }
       }else{
          for (var i =0; i < serBox.length; i++){
            serBox[i].classList.remove("service-slideup")
          }
       }
       if (techSec <= 400){
          for (var i=0; i< techlr.length; i++){
            if (techlr[i].classList.contains("tech-slide-lr") == false){
              techlr[i].className += " tech-slide-lr"
            }
            if (techrl[i].classList.contains("tech-slide-rl") == false){
              techrl[i].className += " tech-slide-rl"
            }
            if (techbt[i].classList.contains("tech-slide-bt") == false){
              techbt[i].className += " tech-slide-bt"
            }
          }
       }else{
          for (var i =0; i < techlr.length; i++){
            techlr[i].classList.remove("tech-slide-lr");
            techrl[i].classList.remove("tech-slide-rl");
            techbt[i].classList.remove("tech-slide-bt");
          }
       }
       if (abtsec <= 400){
          if (abtbox.classList.contains("about-slide") == false){
            abtbox.className += " about-slide"
          }
       }else{
          abtbox.classList.remove("about-slide")
       }
       
    });
  }

  clickPhoneIcon() {
    var d = document.querySelector('.phone-open')
    if (d) {
      var mail = document.querySelector(".mrf-bubble--mail");
      var mainBtn = document.querySelector(".mrf-trigger");
      var contactBubbles = document.getElementById("mrf-contactBubbles")
      if (d.classList.contains('mrf-open')){
        d.classList.remove("mrf-open");
        mail.style.height = "50px";
        mainBtn.style.bottom = "0px";
      }else{
        d.className += " mrf-open";
        contactBubbles.classList.remove("phone-open")
        d.style.bottom = "-300px";
        mail.style.height = "430px";
        mail.style.top = "-170px";
        mainBtn.style.bottom = "-100px";
      }
    }
  }
  clickCloseIcon(){
    var contactBubbles = document.querySelector(".mrf-open");
    contactBubbles.className += " phone-open"
    var mail = document.querySelector(".mrf-bubble--mail");
    var mainBtn = document.querySelector(".mrf-trigger");
    var d = document.querySelector('.phone-open');
    // d.classList.remove("mrf-open");
    d.style.bottom = "10px";
    mail.style.height = "30px";
    mail.style.top = "100px";
    mainBtn.style.bottom = "10px";
  }
  render() {
    return (
      <div className="Home">
          <Header />
          <div className="home-section">
            <HomeSection/>
          </div>
          <div className="service-section">
            <ServiceSection/>
          </div>
          <div className="feedback-section">
            <FeedbackSection />
          </div>
          <div className="technology-section">
            <Technology />
          </div>
          <div className="about-section">
            <About />
          </div>
          <div className="contact-section">
            <ContactSection />
          </div>
          <div id="map"></div>
        <div id="mrf-contactBubbles" className="phone-open" onClick={this.clickPhoneIcon}>
          <div className="mrf-bubble mrf-bubble--mail north" >
            <div className="bubble-header">
              <div className="bubble-text pull-left">Have a Question?</div>
              <div className="bubble-close pull-right" onClick={this.clickCloseIcon}><span className="glyphicon glyphicon-chevron-down"></span></div>
            </div>
          </div>
          <div className="bubble-link">
            <a className="mrf-trigger mrf-bubble--close"></a> 
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
