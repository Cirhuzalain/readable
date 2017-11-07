import React, {Component} from 'react'
import PropTypes from 'prop-types'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import SortFilter from 'material-ui/svg-icons/content/sort'
import { connect } from 'react-redux'
import { orderScorePost, orderDatePost } from '../actions'

class SortPost extends Component {

  sortByTimestamp = (props) => {
    return function(e){
      props.sortByDate()
    }
  }

  sortByScore = (props) => {
    return function(e){
      props.sortByVote()
    }
  }

  render(){
    return (
      <IconMenu
        iconButtonElement={<IconButton><SortFilter /></IconButton>} >
        <MenuItem onClick={this.sortByScore(this.props)} value="1" primaryText="Score" />
        <MenuItem onClick={this.sortByTimestamp(this.props)} value="2" primaryText="Date" />
      </IconMenu>
    )
  }
}

function mapStateToProps(state){
  return {
    contents : state
  }
}

function mapDispatchToProps(dispatch){
  return {
    sortByVote : () => dispatch(orderScorePost()),
    sortByDate : () => dispatch(orderDatePost())
  }
}

SortPost.propTypes = {
  contents : PropTypes.object.isRequired,
  sortByDate : PropTypes.func.isRequired,
  sortByVote : PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SortPost)
