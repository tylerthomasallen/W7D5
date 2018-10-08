import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/routes/routes_util';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
    </header>
    <Switch>
      <Route exact path="/" component={GreetingContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
