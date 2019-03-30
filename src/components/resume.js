import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Training from './training';
import Experience from './experience';
import Skills from './skills';
import avatar from './img/avatar.png';


class Resume extends Component {
  render() {
    return (
      <div><Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={avatar}
                alt="avatar"
                style={{height: '210px'}}
                 />
            </div>

            <h2 style={{paddingTop: '.1em'}}>Imani Matafu</h2>
            <h4 style={{color: 'grey'}}>Solutions Architect</h4>
            <hr style={{borderTop: '3px solid #7851a9', width: '50%'}}/>
            <p>I'm a <strong>Web Solutions Architect</strong> from Dar es Salaam, Tanzania. My goal is to provide real working solutions to global challenges</p>
            <hr style={{borderTop: '3px solid #7851a9', width: '50%'}}/>
            <h5>Address</h5>
            <p>COSTECH Building, Kijitonyama, 14113</p>
            <h5>Phone</h5>
            <p>redacted</p>
            <h5>Email</h5>
            <p>redacted</p>
            <hr style={{borderTop: '3px solid #7851a9', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
            <Experience
              startYear={2016}
              endYear={"Present"}
              jobName="Chief Lead"
              companyName="Kabolik Ltd"
              jobDescription="Lead the operations of a company"
              />
              <Experience
                startYear={2018}
                endYear={2018}
                jobName="Chief Lead"
                companyName="Aforevo (MBI) Ltd"
                jobDescription="Lead a team of online media professional"
                />
              <hr style={{borderTop: '3px solid #7851a9'}} />
            <h2>Training</h2>
            <Training
              startYear={2018}
              endYear={2019}
              courseName="Full Stack Web Developer"
              schoolName="Andela Learning Community"
              schoolDescription="Andela builds distributed engineering teams with Africa’s most talented software developers."
               />
            <Training
              startYear={2016}
              endYear={2017}
              courseName="Project Management Professional"
              schoolName="EduCBA"
              schoolDescription="leading global provider of skill based education addressing the needs 500,000+ members across 40+ Countries"
                />
              <hr style={{borderTop: '3px solid #ff6600'}} />

              <h2>Skills</h2>
              <Skills
                skill="JavaScript"
                progress={55}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="UI/UX"
                    progress={90}
                    />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
