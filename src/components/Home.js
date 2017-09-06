import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Header from './Header';
import CategoryContainer from './CategoryContainer';
import PostsContainer from './PostsContainer';

const Home = () => {
  const style = {
    margin: 0,
    top: 'auto',
    right: 30,
    bottom: 30,
    left: 'auto',
    position: 'fixed',
  };
  return (
    <div>
      <div className='content'>
        <Header title="Readable" />
      </div>
      <CategoryContainer />
      <PostsContainer />
      <FloatingActionButton style={style}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  )
}

export default Home;
