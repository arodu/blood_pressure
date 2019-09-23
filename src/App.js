import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import Header from './components/Header'
//import Search from './components/Search'
import IndexRecords from './components/IndexRecords'
import EditRecord from './components/EditRecord'
import NewRecord from './components/NewRecord'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container pt-3">
          <Switch>
            <Route exact path="/" component={IndexRecords} />
            <Route exact path="/:name" component={IndexRecords} />

            <Route exact path="/record/new" component={NewRecord} />
            <Route exact path="/record/new/:name" component={NewRecord} />

            <Route exact path="/record/edit/:id" component={EditRecord} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
