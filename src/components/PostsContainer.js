import React, { Component } from 'react';
import Post from './Post';
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

  infos = [
    {
      title : "React",
      date : "25/07/2017",
      comment : "Comming soon !!!"
    },
    {
      title : "React Native",
      date : "15/09/2017",
      comment : "Comming soon !!!"
    },
    {
      title : "Redux",
      date : "15/08/2017",
      comment : "Comming soon !!!"
    }
  ];

  render(){
    return (
      <div className='container'>
        <h2 className='content'>Posts</h2>
        <SortPost />
        <div>
          {this.infos.map(data => <Post key={data.title} info={data}/> )}
        </div>
      </div>
    )
  }
}

export default PostsContainer;