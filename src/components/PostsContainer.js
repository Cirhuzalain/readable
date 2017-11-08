import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './Post'
import { connect } from 'react-redux'
import SortPost from './SortPost'

class PostsContainer extends Component {

  render(){
    let postsInfos = []
    if (this.props.category && this.props.contents.posts){
      postsInfos = Object.values(this.props.contents.posts).filter(data => data.category === this.props.category)
    } else if (this.props.contents.posts) {
      postsInfos = Object.values(this.props.contents.posts)
    }
    return (
      <div className='container'>
        {postsInfos.length > 0 && <h2 className='content'>Posts</h2>}
        {postsInfos.length > 0 && <SortPost /> }
        <div>
          {
            postsInfos.map(data => <Post key={data.id} info={data} /> )
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {contents  : state.loadData }
}

PostsContainer.propTypes = {
  contents : PropTypes.object.isRequired
}

export default connect(mapStateToProps)(PostsContainer)
