import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CountProvider } from './context';
import Four04 from './screens/404';
import CounterView from './screens/CounterView';
import Welcome from './screens/Welcome';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <CountProvider>
      <AppHeader />
      <Router>
        <Switch>
          <Route exact path="/" component={CounterView} />
          <Route exact path="/welcome" component={Welcome} />
          <Route path='*' component={Four04} />
        </Switch>
      </Router>
    </CountProvider>
  );
}

export default App;
