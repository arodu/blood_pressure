import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import Header from './components/Header'
import Search from './components/Search'
import IndexMeasures from './components/IndexMeasures'
import EditMeasure from './components/EditMeasure'
import NewMeasure from './components/NewMeasure'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container pt-3">
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/measures/:name" component={IndexMeasures} />

            <Route exact path="/measure/new/" component={NewMeasure} />
            <Route exact path="/measure/new/:name" component={NewMeasure} />
            
            <Route exact path="/measure/edit/:id" component={EditMeasure} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
