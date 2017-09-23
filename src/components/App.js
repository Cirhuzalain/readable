import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import ViewCategory from './ViewCategory';
import ViewPost from './ViewPost';
import CreateContainer from './CreateContainer';
import AddCommentContainer from './AddCommentContainer';
import EditPost from './EditPost';
import EditComment from './EditComment';


class App extends Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/category' component={ViewCategory} />
        <Route exact path='/post' component={ViewPost} />
        <Route path='/post/create' component={CreateContainer} />
        <Route path='/comment/create' component={AddCommentContainer} />
        <Route path='/post/edit' component={EditPost} />
        <Route path='/comment/edit' component={EditComment} />
      </div>
    );
  }
}

export default App;
