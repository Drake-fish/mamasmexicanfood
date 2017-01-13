import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './Containers/App';
import Home from './Containers/Home';
import Menu from './Containers/Menu';

const router=(
  <Router history= {browserHistory}>
    <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path="menu" component={Menu}/>
    </Route>
  </Router>
);

export default router;
