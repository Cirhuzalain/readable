import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardHeader} from 'material-ui/Card'


const Category = (props) => {
  return (
    <Card>
      <CardHeader
        title={props.title} />
    </Card>
  )
}

Category.propTypes = {
  title : PropTypes.string.isRequired
}

export default Category
