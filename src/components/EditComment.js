import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Header from './Header'
import RaisedButton from 'material-ui/RaisedButton'
import serializeForm from 'form-serialize'
import {editCommentContent} from '../actions'
import { connect } from 'react-redux'

class EditComment extends Component{

  constructor(props){
    super(props)
    this.commentid = this.props.match.params.commentid
    this.commentInfo = this.props.contents.loadData.comments[this.commentid]
    this.postInfo = this.props.contents.loadData.posts[this.commentInfo.parentId]
    this.state = {description : ''}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, {hash : true})
    const {comment} = values

    if (!comment){
      this.setState({description : 'Comment description is required'})
    }
    else if (comment.length < 2){
      this.setState({description : 'Short comment description (>= 2 characters)'})
    } else {
      this.setState({description : ''})
      const commentData = {body : comment, id : this.commentInfo.id}
      this.props.editCommentInfo(commentData)
      this.props.history.push(`/${this.postInfo.category}/${this.postInfo.id}`)
    }
  }

  render(){
    return(
      <div>
        <div className='content'>
          <Header title="Edit Comment" home={false}/>
        </div>
        <div className='form-container'>
          <form onSubmit={this.handleSubmit}>
            <TextField
              hintText="Comment Details"
              name="comment"
              fullWidth={true}
              defaultValue={this.commentInfo.body}
              errorText={this.state.description}
              multiLine={true}
              rows={3}
            />
            <RaisedButton type="submit"
              label="Save"
              secondary={true}/>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {contents : state}
}

function mapDispatchToProps(dispatch){
  return {
    editCommentInfo : (comment) => dispatch(editCommentContent(comment))
  }
}

EditComment.propTypes = {
  contents : PropTypes.object.isRequired,
  editCommentInfo : PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(EditComment)
