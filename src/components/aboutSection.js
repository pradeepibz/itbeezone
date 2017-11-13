import React from 'react'
import AboutVideo from '../images/video/Background video - sample.mp4';

class About extends React.Component {
  render(){
    return(
      <div className="pt-pb-95">
        <div className="about-header">
          <h1> ABOUT US</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <video width="500" height="450" controls>
                <source src={AboutVideo} type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-md-6 about-description">
              One of the fastest growing technology enterprise, ITBeeZone specializes in crafting solutions for entrepreneurs, large organizations, agencies and start-ups. With a blend of ingenuous expertise, system prowess, and cloud compatibility, ITBeeZone endeavours to maximize the profit that clients educe from their IT investment. We are industry veterans using and implementing Ruby on Rails from its nascent stages for development, training, deploying and contributing. Through trusted technical expertise and consummate customer service combined to deliver a delightful experience for our clients, ITBeeZone provide end to end Ruby on Rails consulting, architecture, building, management and extension to companies around the world. We support our clients with tools, techniques and pioneering approaches to solve mission critical business problems. We provide an extensive range of RoR Consulting services from process review, cloud deployment to consulting. An eclectic mix of group, our RoR experts are united by the love for Rails framework and a desire to produce digital masterpieces. Using a collaborative and delivery-oriented approach to all our projects, our experts bring exquisite visuals, intuitive designs and outstanding content and convert ideas into successful products.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;