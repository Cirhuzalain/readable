import React, { Component } from 'react';
import Category from './Category';
import { Link } from 'react-router-dom';
import keyIndex from 'react-key-index';
import { connect } from 'react-redux';

class CategoryContainer extends Component {
  constructor(){
    super();
    this.styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    };
  }

  render(){
    return (
      <div className="container">
        <h2 className='content'>Categories</h2>
        <div style={this.styles.root}>
          {this.props.contents.categ && keyIndex(this.props.contents.categ, 1).map(cat => <Link to={`/${cat.name}`}><Category key={cat._nameId} title={cat.name} /> </Link> )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {contents  : state.loadData }
}

/*function mapDispatchToProps(dispatch){
  return {
    viewPostCategory : (data, store) => dispatch(viewCategoryInfo(data, store))
  }
}*/
export default connect(mapStateToProps)(CategoryContainer);
