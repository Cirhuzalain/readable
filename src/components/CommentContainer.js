import React, { Component } from 'react';
import SortPost from './SortPost';
import Comment from './Comment';
import { connect } from 'react-redux';

class CommentContainer extends Component {

  render(){
    let commentInfos = [];
    if(this.props.comments){
      commentInfos =  Object.values(this.props.comments).filter(comment => comment.parentId === this.props.post);
    }
    return (
      <div className='container'>
        <h2 className='content'>Comments</h2>
        <SortPost />
        {commentInfos.map(data => <Comment key={data.id} info={data} />)}
      </div>
    )
  }
}

function mapStateToProps(state){
  return { comments : state.loadData.comments}
}

export default connect(mapStateToProps)(CommentContainer);
