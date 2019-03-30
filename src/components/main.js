import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Landing from './landing';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
   <Switch>
      <Route exact path="/" component={Landing} />
         <Route path="/home" component={Landing} />
            <Route path="/resume" component={Resume} />
               <Route path="/projects" component={Projects} />
                  <Route path="/contact" component={Contact} />
   </Switch>
)

export default Main;
