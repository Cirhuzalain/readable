import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import SortFilter from 'material-ui/svg-icons/content/sort';

class SortPost extends Component {
  render(){
    return (
      <IconMenu
        iconButtonElement={<IconButton><SortFilter /></IconButton>} >
        <MenuItem value="1" primaryText="Score" />
        <MenuItem value="2" primaryText="Date" />
      </IconMenu>
    )
  }
}

export default SortPost;
