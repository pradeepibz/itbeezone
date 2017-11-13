import React from 'react';

class PortfolioSection extends React.Component {
  render(){
    return(
      <div className="portfolio-container">
        <div className="row">
          <div className="col-md-6">
            <div className="portfolio-one">
              <span className="port-header">LifeLinker</span>
              <p><span className="port-desc">LifeLinker provides a trusted way for people to learn of the passing of those they care about and, in turn, to share the news of their own eventual passing with family, friends and others they wish to tell.</span></p>
              <div className="port-details">
                <p><h4>PROJECT DETAILS</h4></p>
                <p><b>CLIENT: </b><span className="port-client">David, USA</span></p>
                <p><b>TECHNOLOGY: </b><span className="port-tech">Ruby on Rails 4.2, MySQL, HTML & CSS, Javascript, Jquery, Capistrano</span></p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="portfolio-two"></div>
          </div>
          <div className="col-md-6">
            <div className="portfolio-three"></div>
          </div>
          <div className="col-md-6">
            <div className="portfolio-four"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioSection;