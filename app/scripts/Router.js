import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './Containers/App';


const router=(
  <Router history= {browserHistory}>
    <Route path='/' component={App}>
    </Route>
  </Router>
);

export default router;
