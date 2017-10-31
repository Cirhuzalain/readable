import React, { Component } from 'react';
import { Link }from 'react-router-dom';
import {Card, CardActions, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import { connect } from 'react-redux';

class  PostDetail extends Component {

  render(){
    const postInfo = this.props.posts[this.props.post];
    return (
      <div className='post-container'>
        <Card>
          <CardHeader
            title={postInfo.title}
            subtitle={`Post by ${postInfo.author}`} />
          <CardTitle title={postInfo.comments.length > 1 ? `${postInfo.comments.length} comments` :  `${postInfo.comments.length} comment`}subtitle={postInfo.voteScore}/>
          <CardText>
            {postInfo.body}
          </CardText>
          <CardActions>
            <RaisedButton icon={<ActionThumbUp />}  />
            <RaisedButton icon={<ActionThumbDown />}  />
            <Link to='/post/edit'><RaisedButton label="Edit" /></Link>
            <RaisedButton label="Delete" />
          </CardActions>
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    posts : state.loadData.posts
  }
}

export default connect(mapStateToProps)(PostDetail);
