import React, {Component} from 'react';

class ServiceSection extends Component {
  render(){
    return(
      <div className="container">
        <div className="service-header"><h1>SERVICES</h1></div>
        <div className="row">
            <div className="col-md-3 col-sm-6 web-design serv-box">
                <div className="serviceBox">
                    <div className="service-icon"><i className="fa fa-globe"></i></div>
                    <h3 className="title">Web Design</h3>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sapien at erat hendrerit.</p>
                </div>
            </div>
     
            <div className="col-md-3 col-sm-6 web-development serv-box">
                <div className="serviceBox">
                    <div className="service-icon"><i className="fa fa-rocket"></i></div>
                    <h3 className="title">Web Development</h3>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sapien at erat hendrerit.</p>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 brand-building serv-box">
                <div className="serviceBox">
                    <div className="service-icon"><i className="fa fa-briefcase"></i></div>
                    <h3 className="title">Brand Building</h3>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sapien at erat hendrerit.</p>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 responsive-design serv-box">
                <div className="serviceBox">
                    <div className="service-icon"><i className="fa fa-mobile"></i></div>
                    <h3 className="title">Responsive Design</h3>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sapien at erat hendrerit.</p>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
export default ServiceSection