import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {Card, CardHeader, CardText, CardActions, CardTitle} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down'
import { connect } from 'react-redux'
import { upVotePostContent, downVotePostContent, deletePostContent } from '../actions'

class Post extends Component {


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

  deletePost = (post, props) => {
    return function(e){
      props.deletePostInfo(post)
    }
  }

  render(){
    return (
      <div>
        <Card>
          <CardHeader
            title={`${this.props.info.title}`}
            actAsExpander={true}
            showExpandableButton={true}
            subtitle={`Post by ${this.props.info.author}`} />
          <CardTitle title={this.props.info.commentCount > 1 ? `${this.props.info.commentCount} comments` :  `${this.props.info.commentCount} comment`} subtitle={`Vote : ${this.props.info.voteScore}`}/>
          <CardText expandable={true}>
            {this.props.info.body}
          </CardText>
          <CardActions>
            <RaisedButton onClick={this.upVotePost(this.props.info, this.props)} icon={<ActionThumbUp />}  />
            <RaisedButton onClick={this.downVotePost(this.props.info, this.props)} icon={<ActionThumbDown />}  />
            <RaisedButton onClick={this.deletePost(this.props.info, this.props)} label="Delete" />
            <Link to={`/post/edit/${this.props.info.id}`}><RaisedButton label="Edit" /></Link>
            <Link to={`/${this.props.info.category}/${this.props.info.id}`}><RaisedButton label="View Detail" /></Link>
          </CardActions>
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {content : state}
}

function mapDispatchToProps(dispatch){
  return {
    deletePostInfo : (post) => dispatch(deletePostContent(post)),
    upVotePostInfo : (post) => dispatch(upVotePostContent(post)),
    downVotePostInfo : (post) => dispatch(downVotePostContent(post))
  }
}

Post.propTypes = {
  info : PropTypes.object.isRequired,
  content : PropTypes.object.isRequired,
  deletePostInfo : PropTypes.func.isRequired,
  upVotePostInfo : PropTypes.func.isRequired,
  downVotePostInfo : PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
