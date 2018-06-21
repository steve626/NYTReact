import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//needs completed paths
import Articles from './articles';
import Detail from './detail';
import NoMatch from './NoMatch';
import Nav from '.components/Nav';



const App = () => (
  <Router>
    <div>
      <Nav />
        <Switch>
          <Route exact path='/' component={Articles} />
          <Route exact path='/articles' component={Articles} />
          <Route exact path='/articles:id' component={Detail} />
          <Route component={NoMatch} />
        </Switch>
    </div>
  </Router>
);

export default App;
