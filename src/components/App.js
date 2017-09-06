import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import ViewCategory from './ViewCategory';


class App extends Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/category' component={ViewCategory}/>
      </div>
    );
  }
}

export default App;
