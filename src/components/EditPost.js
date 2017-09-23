import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Header from './Header';
import RaisedButton from 'material-ui/RaisedButton';
import serializeForm from 'form-serialize';

class EditPost extends Component{

  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, {hash : true})
    console.log(values);
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
              fullWidth={true}
            /><br />
            <TextField
              hintText="Post Details"
              name="details"
              fullWidth={true}
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

export default EditPost;
