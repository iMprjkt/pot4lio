import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText } from 'react-mdl';

class Projects extends Component {
   constructor(props) {
     super(props);
     this.state = { activeTab: 0 };
   }

   toggleCategories() {

     if(this.state.activeTab === 0){
       return(
         <div className="projects-grid">
           {/* Project 1 */}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: '#000', height: '176px', background: 'url(https://www.kabolik.com/img/lg1.svg) center / cover'}} >Kabolik Website</CardTitle>
             <CardText>
               Designed the kabolik website using Bootstrap Framework
             </CardText>
           </Card>

           {/* Project 2 */}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: '#000', height: '176px', background: 'url(https://about.gitlab.com/images/press/logo/png/gitlab-logo-gray-stacked-rgb.png) center / cover'}} >Demo Website</CardTitle>
             <CardText>
               Designed a demo site using Flex Cube
             </CardText>
           </Card>
         </div>

       )
     } else if(this.state.activeTab === 1) {
       return (
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#000', height: '176px', background: 'url(https://about.gitlab.com/images/press/logo/png/gitlab-logo-gray-stacked-rgb.png) center / cover'}} >JavaScript NPM</CardTitle>
              <CardText>
                Managed frontend communication using Node, ReactJS and automated via GULP
              </CardText>
            </Card>

            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#000', height: '176px', background: 'url(https://about.gitlab.com/images/press/logo/png/gitlab-logo-gray-stacked-rgb.png) center / cover'}} >Full Stack Web App</CardTitle>
              <CardText>
                Used AngularJS Framework, NodeJS, and MongoDB
              </CardText>
            </Card>
          </div>
       )
     } else if(this.state.activeTab === 2) {
       return (
         <div className="projects-grid">
           {/* Project 1 */}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: '#000', height: '176px', background: 'url(https://about.gitlab.com/images/press/logo/png/gitlab-logo-gray-stacked-rgb.png) center / cover'}} >Kabolik Elements</CardTitle>
             <CardText>
               Designed the UI/UX for kabolik Website
             </CardText>
           </Card>

           {/* Project 2 */}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: '#000', height: '176px', background: 'url(https://about.gitlab.com/images/press/logo/png/gitlab-logo-gray-stacked-rgb.png) center / cover'}} >Personal Profile</CardTitle>
             <CardText>
               Designed some of the UI elements for the website
             </CardText>
           </Card>
         </div>
       )
     }
   }



   render() {
     return(
       <div>
         <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
           <Tab>HTML/CSS</Tab>
           <Tab>JavaScript</Tab>
           <Tab>UI/UX Design</Tab>
         </Tabs>

           <Grid>
             <Cell col={12}>
               <div className="content">{this.toggleCategories()}</div>
             </Cell>
           </Grid>


       </div>
    );
  }
}

export default Projects;
