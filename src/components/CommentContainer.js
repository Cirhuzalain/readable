import React, { Component } from 'react';
import SortPost from './SortPost';
import Comment from './Comment';

class CommentContainer extends Component {
  infos = [
    {
      author : "Alino",
      date : "25/07/2017",
      body : "Comming soon !!!"
    },
    {
      author : "John",
      date : "15/09/2017",
      body : "Comming soon !!!"
    },
    {
      author : "Peter",
      date : "15/08/2017",
      body : "Comming soon !!!"
    }
  ];

  render(){
    return (
      <div className='container'>
        <h2 className='content'>Comments</h2>
        <SortPost />
        {this.infos.map(data => <Comment key={data.author} info={data} />)}
      </div>
    )
  }
}

export default CommentContainer;
