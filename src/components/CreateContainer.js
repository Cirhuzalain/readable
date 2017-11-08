import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import Header from './Header'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import {addNewPost} from '../actions'
import uuid from 'uuid'

class CreateContainer extends Component{

  constructor(props){
    super(props)
    const cat = this.props.match.params.catname
    const defaultIndex = this.props.categories.indexOf(cat)
    if (defaultIndex !== -1){
      this.state = {name : '', title : '', details : '', select : defaultIndex}
    } else {
      this.state = {name : '', title : '', details : '', select : 0}
    }
  }

  handleChange = (event, index, value) => this.setState({select : value})

  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, {hash : true})
    let {name, post, details} = values

    if (!name){
      this.setState({name : 'Name is required'})
    }
    if (!post){
      this.setState({title : 'Post title is required'})
    }
    if (!details){
      this.setState({details : 'Post detail is required'})
    }
    else if (name.trim().length < 2 || post.trim().length < 2 || details.trim().length < 2){
      this.setState({name : 'Short name or post title or post details (>= 2 characters)'})
    } else {
      this.setState({name : '', title : '', details : ''})
      const timestamp = Date.now()
      const id = uuid.v4().replace(/-/g, '').toString()
      const category = this.props.categories[this.state.select]
      const postInfo = {id : id, timestamp : timestamp, title : post, body : details, author : name, category : category}
      this.props.addPostContent(postInfo)
      this.props.history.push(`/${category}`)
    }
  }

  render(){
    return(
      <div>
        <div className='content'>
          <Header title="Add Post" home={false}/>
        </div>
        <div className='form-container'>
          <form onSubmit={this.handleSubmit}>
            <SelectField value={this.state.select} onChange={this.handleChange}>
            {this.props.categories.map((data, index) => <MenuItem value={index} key={index} primaryText={data}/>)}
            </SelectField><br/>
            <TextField
              hintText="Your Name"
              name="name"
              errorText={this.state.name}
              fullWidth={true}
            /><br />
            <TextField
              hintText="Post Title"
              name="post"
              errorText={this.state.title}
              fullWidth={true}
            /><br />
            <TextField
              hintText="Post Details"
              name="details"
              errorText={this.state.details}
              fullWidth={true}
              multiLine={true}
              rows={3}
            />
            <RaisedButton type="submit"
              label="Add"
              secondary={true}/>
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    addPostContent : (post) => dispatch(addNewPost(post))
  }
}

function mapStateToProps(state){
  return {categories : state.loadData.categ.map(cat => cat.name)}
}

CreateContainer.propTypes = {
  categories : PropTypes.array.isRequired,
  addPostContent : PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer)
