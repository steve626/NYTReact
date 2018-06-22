import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//needs completed paths
import NoMatch from './NoMatch';
import DeleteBtn from './components/DeleteBtn';
import Form from './components/Form';
import Grid from './components/Grid';
import Jumbotron from './components/Jumbotron';
import List from './components/List';
import Results from './components/Results';
import Saved from './components/Saved';
import SearchForm from './components/SearchForm';
import Wrapper from './components/Wrapper';






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
