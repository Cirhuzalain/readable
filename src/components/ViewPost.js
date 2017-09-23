import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import PostContainer from './PostContainer';
import ContentComment from 'material-ui/svg-icons/communication/comment';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import style from './style';
import CommentContainer from './CommentContainer';

class ViewPost extends Component {
  state = {
    open: false,
  }

  handleClose = () => {
    this.setState({open : false});
  }

  handleOpen = () => {
    this.setState({open : true});
  }

  render() {

    return (
      <div>
        <div className='content'>
          <Header title="Post" home={false} />
        </div>
        <PostContainer />
        <CommentContainer />
        <Link to='/comment/create'>
          <FloatingActionButton style={style}>
            <ContentComment />
          </FloatingActionButton>
        </Link>
      </div>
    )
  }
}

export default ViewPost;
