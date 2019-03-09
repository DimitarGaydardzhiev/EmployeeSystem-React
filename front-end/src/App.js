import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './views/home';
import Departments from './views/departments';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Header />
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/departments/all" exact component={Departments}></Route>
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
