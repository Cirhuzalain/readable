import React from 'react';
import AppBar from 'material-ui/AppBar';


const Header = (props) => {
  return (
    <AppBar
      title={props.title}
      iconClassNameRight="muidocs-icon-navigation-expand-more" />
  )
}

export default Header;
