import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Category from './Category'
import { Link } from 'react-router-dom'
import keyIndex from 'react-key-index'
import { connect } from 'react-redux'
import style from './style'

class CategoryContainer extends Component {

  render(){
    let categInfos = []
    if (this.props.contents){
      categInfos = this.props.contents
      categInfos = keyIndex(categInfos, 1)
    }
    return (
      <div className="container">
        <h2 className='content'>Categories</h2>
        <div style={style.root}>
          {categInfos.map((cat, index)=> <Link key={index} to={`/${cat.name}`}><Category key={cat._nameId} title={cat.name} /> </Link> )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {contents  : state.loadData.categ }
}

CategoryContainer.propTypes = {
  contents : PropTypes.array.isRequired
}

export default connect(mapStateToProps)(CategoryContainer)
