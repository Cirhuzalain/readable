import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';


const Category = (props) => {
  return (
    <Card>
      <CardHeader
        title={props.title} />
    </Card>
  )
}

export default Category;
