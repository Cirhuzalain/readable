import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class CommentContainer extends Component {

  render(){

    let commentInfos = []
    if(this.props.comments){
      commentInfos =  Object.values(this.props.comments).filter(comment => comment.parentId === this.props.post)
    }
    return (
      <div className='container'>
        {commentInfos.length > 0 && <h2 className='content'>Comments</h2>}
        {commentInfos.map(data => <Comment key={data.id} info={data} />)}
      </div>
    )
  }
}

function mapStateToProps(state){
  return { comments : state.loadData.comments}
}

CommentContainer.propTypes = {
  comments : PropTypes.object.isRequired
}

export default connect(mapStateToProps)(CommentContainer)
