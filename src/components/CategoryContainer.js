import React from 'react';
import Category from './Category';
import { Link } from 'react-router-dom';

const CategoryContainer = () => {
  const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  };
  const catLists = ["React", "Redux", "AI", "ML", "NLP", "CV", "DL", "RL", "DRL", "CNN", "RNN", "GAN"]
  return (
    <div className="container">
      <h2 className='content'>Categories</h2>
      <div style={styles.root}>
        {catLists.map(cat => <Link to='/category'><Category key={cat} title={cat} /> </Link> )}
      </div>
    </div>
  )
}

export default CategoryContainer;
