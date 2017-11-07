import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Header from './Header'
import RaisedButton from 'material-ui/RaisedButton'
import uuid from 'uuid'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { addNewComment } from '../actions'

class AddCommentContainer extends Component {

  constructor(props){
    super(props)
    this.state = {author : '', description : ''}
    this.postid = this.props.match.params.postid
    this.postInfos = this.props.contents.loadData.posts
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, {hash : true})
    const {author, description} = values

    if (!author){
      this.setState({author : 'Author is required'})
    }
    if (!description){
      this.setState({description : 'Description is required'})
    }
    else if (author.length < 2 || description.length < 2 ){
      this.setState({author : 'Short author name or comment description (>= 2 characters)'})
    } else {
      this.setState({author : '', description : ''})
      const timestamp = Date.now()
      const id = uuid.v4().replace(/-/g, '').toString()
      const commentInfo = {id : id, timestamp : timestamp, author : author, body : description, parentId : this.postid}
      const postInfo = this.postInfos[this.postid]
      this.props.addCommentInfo(commentInfo)
      this.props.history.push(`/${postInfo.category}/${this.postid}`)
    }

  }

  render(){
    return(
      <div>
        <div className='content'>
          <Header title="Comment" home={false}/>
        </div>
        <div className='form-container'>
          <form onSubmit={this.handleSubmit}>
            <TextField
              hintText="Comment Author"
              name="author"
              errorText={this.state.author}
              fullWidth={true}
            /><br />
            <TextField
              hintText="Comment Description"
              name="description"
              errorText={this.state.description}
              fullWidth={true}
              multiLine={true}
              rows={3}/>
            <RaisedButton type="submit"
              label="Add"
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
    addCommentInfo : (comment) => dispatch(addNewComment(comment))
  }
}

AddCommentContainer.propTypes = {
  contents : PropTypes.object.isRequired,
  addCommentInfo : PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentContainer)
