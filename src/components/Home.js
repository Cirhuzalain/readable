import React from 'react';
import { Link } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Header from './Header';
import CategoryContainer from './CategoryContainer';
import style from './style.js';
import PostsContainer from './PostsContainer';

const Home = () => {

  return (
    <div>
      <div className='content'>
        <Header title="Readable" home={true}/>
      </div>
      <CategoryContainer />
      <PostsContainer />
      <Link to='/post/create'>
        <FloatingActionButton style={style}>
          <ContentAdd />
        </FloatingActionButton>
      </Link>
    </div>
  )
}

export default Home;
