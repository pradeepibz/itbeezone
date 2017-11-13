import React from 'react';
import Imgrails from '../images/rails.png';
import Imgangular from '../images/angularjs.png';
import Imgreact from '../images/reactjs.png';
import Imgjavascript from '../images/javascript.png';
import Imgbackbone from '../images/backbonejs.png';
import Imgjquery from '../images/jquery.png';
import Imgphp from '../images/php.png';
import Imgnode from '../images/nodejs.png';
import Imghtml from '../images/html.png';

class Technology extends React.Component {
  render(){
    return(
      <div className="technology-container">
        <div className="pt-pb-95">
          <div className="technology-header">
            <h1>TECHNOLOGIES</h1>
          </div>
          <div className="container">
            <div className="col-xs-6 col-sm-6 col-md-4 ruby-on-rails slide-lr">
              <div className="tech-box">
                <div className="img-box">
                  <img src={Imgrails}/>
                </div>
                <div className="tech-name">
                  <p>RUBY ON RAILS </p>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4 angular-js slide-bt">
              <div className="tech-box">
                <div className="img-box">
                  <img src={Imgangular}/>
                </div>
                <div className="tech-name">
                  <p>ANGULAR JS </p>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4 react-js slide-rl">
              <div className="tech-box">
                <div className="img-box">
                  <img src={Imgreact}/>
                </div>
                <div className="tech-name">
                  <p>REACT JS </p>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4 javascript slide-lr">
              <div className="tech-box">
                 <div className="img-box">
                  <img src={Imgjavascript}/>
                </div>
                <div className="tech-name">
                  <p>JAVASCRIPT </p>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4 backbone-js slide-bt">
              <div className="tech-box">
                <div className="img-box">
                  <img src={Imgbackbone}/>
                </div>
                <div className="tech-name">
                  <p>BACKBONE JS </p>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4 jquery slide-rl">
              <div className="tech-box">
                <div className="img-box">
                  <img src={Imgjquery}/>
                </div>
                <div className="tech-name">
                  <p>JQUERY </p>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4 php slide-lr">
              <div className="tech-box">
                <div className="img-box">
                  <img src={Imgphp}/>
                </div>
                <div className="tech-name">
                  <p>PHP </p>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4 node-js slide-bt">
              <div className="tech-box">
                <div className="img-box">
                  <img src={Imgnode}/>
                </div>
                <div className="tech-name">
                  <p>NODE JS </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 html-css slide-rl">
              <div className="tech-box">
                <div className="img-box">
                  <img src={Imghtml}/>
                </div>
                <div className="tech-name">
                  <p>HTML & CSS </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Technology;