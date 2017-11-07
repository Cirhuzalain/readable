import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back'

const Header = (props) => {
  if (props.home){
    return (
      <AppBar
        title={props.title}
        iconClassNameRight="muidocs-icon-navigation-expand-more" />
    )
  } else {
    return (
      <AppBar
        title={props.title}
        iconElementLeft={<Link to='/'><IconButton><NavigationClose /></IconButton></Link>} />
    )
  }
}

Header.propTypes = {
  home : PropTypes.bool.isRequired,
  title : PropTypes.string.isRequired
}

export default Header
