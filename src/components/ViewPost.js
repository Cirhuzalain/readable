import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import PostContainer from './PostContainer'
import ContentComment from 'material-ui/svg-icons/communication/comment'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import style from './style'
import CommentContainer from './CommentContainer'

class ViewPost extends Component {

  render() {
    const post  = this.props.match.params.post
    const history = this.props.history
    const info = {post, history}
    return (
      <div>
        <div className='content'>
          <Header title="Post" home={false} />
        </div>
        <PostContainer postinfo={info} />
        <CommentContainer post={post} />
        <Link to={`/add/comment/${post}`}>
          <FloatingActionButton style={style.fab}>
            <ContentComment />
          </FloatingActionButton>
        </Link>
      </div>
    )
  }
}

export default ViewPost
