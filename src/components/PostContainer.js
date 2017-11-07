import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link }from 'react-router-dom'
import {Card, CardActions, CardHeader, CardText, CardTitle } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down'
import { connect } from 'react-redux'
import { format } from 'date-fns'
import {deletePostContent, upVotePostContent, downVotePostContent} from '../actions'

class  PostDetail extends Component {

  constructor(props){
    super(props)
    this.post = this.props.postinfo.post
    this.redirect = this.props.postinfo.history
  }

  upVotePost = (post, props) => {
    return function(e){
      props.upVotePostInfo(post)
    }
  }

  downVotePost = (post, props) => {
    return function(e){
      props.downVotePostInfo(post)
    }
  }

  deletePost = (post, props, redirect) => {
    return function(e){
      props.deletePostInfo(post)
      redirect.push(`/${post.category}`)
    }
  }

  render(){
    const postInfo = this.props.posts[this.post]
    return (
      <div className='post-container'>
        <Card>
          <CardHeader
            title={postInfo.title}
            subtitle={`Post by ${postInfo.author}`} />
          <CardTitle title={`Vote : ${postInfo.voteScore}`} subtitle={format(new Date(postInfo.timestamp), 'MM/DD/YYYY HH:ss:mm')}/>
          <CardText>
            {postInfo.body}
          </CardText>
          <CardActions>
            <RaisedButton onClick={this.upVotePost(postInfo, this.props)} icon={<ActionThumbUp />}  />
            <RaisedButton onClick={this.downVotePost(postInfo, this.props)} icon={<ActionThumbDown />}  />
            <Link to={`/post/edit/${postInfo.id}`}><RaisedButton label="Edit" /></Link>
            <RaisedButton onClick={this.deletePost(postInfo, this.props, this.redirect)} label="Delete" />
          </CardActions>
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    posts : state.loadData.posts
  }
}

function mapDispatchToProps(dispatch){
  return {
    deletePostInfo : (post) => dispatch(deletePostContent(post)),
    upVotePostInfo : (post) => dispatch(upVotePostContent(post)),
    downVotePostInfo : (post) => dispatch(downVotePostContent(post))
  }
}

PostDetail.propTypes = {
  posts : PropTypes.object.isRequired,
  deletePostInfo : PropTypes.func.isRequired,
  upVotePostInfo : PropTypes.func.isRequired,
  downVotePostInfo : PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
