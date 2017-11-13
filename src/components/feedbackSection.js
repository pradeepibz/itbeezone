import React from 'react';
import client1 from '../images/client1.jpg'

class FeedbackSection extends React.Component {
  render(){
    return(
      <div className="pt-pb-95">
        <div className="testimonial-header">
          <h1>TESTIMONIAL</h1>
        </div>
        <div className="container">
          <div className="row">
              <div className="col-md-12">
                  <div id="testimonial-slider" className="owl-carousel">
                      <div className="testimonial">
                          <div className="pic">
                              <img src={client1} alt=""/>
                          </div>
                          <h3 className="title">Lorem ipsum dolor</h3>
                          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ante porttitor.</p>
                          <div className="testimonial-content">
                              <div className="testimonial-profile">
                                  <h3 className="name">williamson</h3>
                                  <span className="post">Web Developer</span>
                              </div>
                          </div>
                      </div>

                      <div className="testimonial">
                          <div className="pic">
                              <img src={client1} alt=""/>
                          </div>
                          <h3 className="title">Lorem ipsum dolor</h3>
                          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ante porttitor.</p>
                          <div className="testimonial-content">
                              <div className="testimonial-profile">
                                  <h3 className="name">williamson</h3>
                                  <span className="post">Web Developer</span>
                              </div>
                          </div>
                      </div>
                      <div className="testimonial">
                          <div className="pic">
                              <img src={client1} alt=""/>
                          </div>
                          <h3 className="title">Lorem ipsum dolor</h3>
                          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ante porttitor.</p>
                          <div className="testimonial-content">
                              <div className="testimonial-profile">
                                  <h3 className="name">williamson</h3>
                                  <span className="post">Web Developer</span>
                              </div>
                          </div>
                      </div>
       
                      <div className="testimonial">
                          <div className="pic">
                              <img src={client1} alt=""/>
                          </div>
                          <h3 className="title">Lorem ipsum dolor</h3>
                          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ante porttitor.</p>
                          <div className="testimonial-content">
                              <div className="testimonial-profile">
                                  <h3 className="name">Kristina</h3>
                                  <span className="post">Web Designer</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FeedbackSection;