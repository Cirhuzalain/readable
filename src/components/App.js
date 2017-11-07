import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import ViewCategory from './ViewCategory'
import ViewPost from './ViewPost'
import CreateContainer from './CreateContainer'
import AddCommentContainer from './AddCommentContainer'
import EditPost from './EditPost'
import EditComment from './EditComment'
import configureStore from '../store/store'
import { PersistGate } from 'redux-persist/es/integration/react'


class App extends Component {

  render() {
    const {persistor} = configureStore()
    return (
      <PersistGate persistor={persistor} loading={null}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:category' component={ViewCategory} />
            <Route path='/add/post/:catname' component={CreateContainer} />
            <Route path='/add/comment/:postid' component={AddCommentContainer} />
            <Route path='/post/edit/:postid' component={EditPost} />
            <Route path='/comment/edit/:commentid' component={EditComment} />
            <Route path='/:category/:post' component={ViewPost} />
          </Switch>
      </PersistGate>
    );
  }
}

export default App
