import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import Header from './Header'
import RaisedButton from 'material-ui/RaisedButton'
import serializeForm from 'form-serialize'
import {editPostContent} from '../actions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class EditPost extends Component{

  constructor(props){
    super(props)
    const postId = this.props.match.params.postid
    this.postInfo = this.props.content.posts[postId]
    this.state = {title : '', details : ''}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, {hash : true})
    const {post, details} = values

    if (!post){
      this.setState({title : 'Post title is required'})
    }
    if (!details){
      this.setState({details : 'Post detail is required'})
    }
    else if (post.trim().length < 2 || details.trim().length < 2){
      this.setState({name : 'Short post title or post details (>= 2 characters)'})
    } else {
      this.setState({title : '', details : ''})
      const postInfo = {title : post, body : details, id : this.postInfo.id}
      this.props.updatePostInfo(postInfo)
      this.props.history.push(`/${this.postInfo.category}/${this.postInfo.id}`)
    }
  }

  render(){
    return(
      <div>
        <div className='content'>
          <Header title="Edit Post" home={false}/>
        </div>
        <div className='form-container'>
          <form onSubmit={this.handleSubmit}>
            <TextField
              hintText="Post Title"
              name="post"
              defaultValue={this.postInfo.title}
              errorText={this.state.title}
              fullWidth={true}
            /><br />
            <TextField
              hintText="Post Details"
              name="details"
              errorText={this.state.details}
              defaultValue={this.postInfo.body}
              fullWidth={true}
              multiLine={true}
              rows={3}
            />
            <RaisedButton type="submit"
              label="Update"
              secondary={true}/>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {content : state.loadData}
}

function mapDispatchToProps(dispatch){
  return {
    updatePostInfo : (post) => dispatch(editPostContent(post))
  }
}

EditPost.propTypes = {
  content : PropTypes.object.isRequired,
  updatePostInfo : PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
