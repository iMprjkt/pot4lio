import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import avatar from './img/avatar.png';


class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Imani Matafu</h2>
            <img
              src={avatar}
              alt="avatar"
              style={{height: '250px'}}
               />
             <h3>Web Solutions Architect</h3>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
              <div class="contact-content">
                <div class="contact-details">
                 <h5>Address</h5>
                 <p>Sayansi, Kijitonyama, Dar es Salaam</p>
               </div>
             </div>
             <div class="contact-content">
               <div class="contact-details">
                 <h5>Call Us</h5>
                 <p>Redacted</p>
               </div>
             </div>
             <div class="contact-content">
               <div class="contact-details">
                 <h5>Enquiries</h5>
                 <p>github.com/iMprojekt</p>
               </div>
             </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
