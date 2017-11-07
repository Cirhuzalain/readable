import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardText, CardActions, CardTitle } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down'
import { format } from 'date-fns'
import { connect } from 'react-redux'
import { deleteCommentContent, upVoteCommentContent, downVoteCommentContent } from '../actions'

class Comment extends Component {

  upVoteComment = (comment, props) => {
    return function(e){
      props.upVoteCommentInfo(comment)
    }
  }

  downVoteComment = (comment, props) => {
    return function(e){
      props.downVoteCommentInfo(comment)
    }
  }

  deleteComment = (comment, props) => {
    return function(e){
      props.deleteCommentInfo(comment)
    }
  }

  render(){
    return (
      <div>
        <Card>
          <CardHeader
            title={`Posted by ${this.props.info.author}`}
            actAsExpander={true}
            showExpandableButton={true}
            subtitle={format(new Date(this.props.info.timestamp), 'MM/DD/YYYY HH:mm:ss')}/>
          <CardTitle subtitle={`Vote : ${this.props.info.voteScore}`} />
          <CardText expandable={true}>
            {this.props.info.body}
          </CardText>
          <CardActions>
            <RaisedButton onClick={this.upVoteComment(this.props.info, this.props)} icon={<ActionThumbUp />}  />
            <RaisedButton onClick={this.downVoteComment(this.props.info, this.props)} icon={<ActionThumbDown />}  />
            <Link to={`/comment/edit/${this.props.info.id}`}>
              <RaisedButton label="Edit" />
            </Link>
            <RaisedButton onClick={this.deleteComment(this.props.info, this.props)} label="Delete" />
          </CardActions>
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {contents : state}
}

function mapDispatchToProps(dispatch){
  return {
    deleteCommentInfo : (data) => dispatch(deleteCommentContent(data)),
    upVoteCommentInfo : (data) => dispatch(upVoteCommentContent(data)),
    downVoteCommentInfo : (data) => dispatch(downVoteCommentContent(data))
  }
}

Comment.propTypes = {
  contents : PropTypes.object.isRequired,
  deleteCommentInfo : PropTypes.func.isRequired,
  upVoteCommentInfo : PropTypes.func.isRequired,
  downVoteCommentInfo : PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
