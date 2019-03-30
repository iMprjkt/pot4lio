import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', marging: 'auto'}}>
         <Grid className="landing-grid">
            <Cell col={12}>
              <img
                src="https://png.pngtree.com/svg/20170128/avatar_black_man_beard_779322.png"
                alt="avatar"
                className="avatar-img"
                />
              <div className="banner-text">
                <h1>Full Stack Web Developer | UI/UX Designer</h1>

              <hr/>
              <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | MongoDB </p>

              <div className="social-links">

                {/*Linkedin*/}
                <a href="https://linkedin.com/imani.matafu" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>

                {/*Github*/}
                <a href="https://github.com/iMprojekt" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github-square" aria-hidden="true"/>
                </a>

                {/*Gitlab*/}
                <a href="https://gitlab.com/iMprojekt" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-gitlab" aria-hidden="true"/>
                </a>

              </div>
              </div>
            </Cell>
         </Grid>
      </div>
    );
  }
}

export default Landing;
