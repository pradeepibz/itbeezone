import React from 'react';

class ContactSection extends React.Component{
  render(){
    return(
      <div className="pt-pb-25">
        <div className="contact-container">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="contact-info fa fa-map-marker">
                  <address><p>Address</p>
                    <p>#21G, B Block, M.S Viswanathan Nagar</p>
                    <p>Karayanchavadi, Poonamallee Chennai - 600056.</p>
                  </address>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-info fa fa-mobile">
                  <p>Phones</p>
                  <span>+91-9790765386</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-info fa fa-envelope">
                    <p>E-mail</p>
                    <span>ibz@itbeezone.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactSection