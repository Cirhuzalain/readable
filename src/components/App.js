import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:category' component={ViewCategory} />
            <Route path='/add/post/' component={CreateContainer} />
            <Route path='/add/comment' component={AddCommentContainer} />
            <Route path='/post/edit' component={EditPost} />
            <Route path='/comment/edit' component={EditComment} />
            <Route path='/:category/:post' component={ViewPost} />
          </Switch>
      </div>
    );
  }
}

export default App;
