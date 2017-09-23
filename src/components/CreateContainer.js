import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Header from './Header';
import RaisedButton from 'material-ui/RaisedButton';
import serializeForm from 'form-serialize';

class CreateContainer extends Component{

  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, {hash : true})
    console.log(values);
  }

  render(){
    return(
      <div>
        <div className='content'>
          <Header title="Add Post" home={false}/>
        </div>
        <div className='form-container'>
          <form onSubmit={this.handleSubmit}>
            <TextField
              hintText="Your Name"
              name="name"
              fullWidth={true}
            /><br />
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
              label="Add"
              secondary={true}/>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateContainer;
