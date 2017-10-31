import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import SortPost from './SortPost';

class PostsContainer extends Component {

  styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    sort: {
      justifyContent: 'end',
    }
  };

  render(){
    let postsInfos = []
    if (this.props.category && this.props.contents.posts){
      postsInfos = Object.values(this.props.contents.posts).filter(data => data.category === this.props.category)
    } else if (this.props.contents.posts) {
      postsInfos = Object.values(this.props.contents.posts)
    }
    return (
      <div className='container'>
        <h2 className='content'>Posts</h2>
        <SortPost />
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
export default connect(mapStateToProps)(PostsContainer);
