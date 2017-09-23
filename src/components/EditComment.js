import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Header from './Header';
import RaisedButton from 'material-ui/RaisedButton';
import serializeForm from 'form-serialize';

class EditComment extends Component{

  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, {hash : true})
    console.log(values);
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

export default EditComment;
