import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import PostContainer from './PostContainer';
import ContentComment from 'material-ui/svg-icons/communication/comment';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import style from './style';
import CommentContainer from './CommentContainer';

class ViewPost extends Component {

  render() {
    const post  = this.props.match.params.post;
    return (
      <div>
        <div className='content'>
          <Header title="Post" home={false} />
        </div>
        <PostContainer post={post} />
        <CommentContainer post={post} />
        <Link to='/add/comment'>
          <FloatingActionButton style={style}>
            <ContentComment />
          </FloatingActionButton>
        </Link>
      </div>
    )
  }
}

export default ViewPost;
