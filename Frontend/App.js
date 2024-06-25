import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerServiceForm from './CustomerServiceForm';
import IntercomWidget from './IntercomWidget';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/customer-service" component={CustomerServiceForm} />
          <Route path="/intercom" component={IntercomWidget} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
