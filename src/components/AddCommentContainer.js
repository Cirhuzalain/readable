import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Header from './Header';
import RaisedButton from 'material-ui/RaisedButton';
import serializeForm from 'form-serialize';

class AddCommentContainer extends Component{

  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, {hash : true})
    console.log(values);
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
            name="title"
            fullWidth={true}
          /><br />
          <TextField
            hintText="Comment Description"
            name="description"
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

export default AddCommentContainer;
