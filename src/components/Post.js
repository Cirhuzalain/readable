import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const Post = (props) => {
  return (
    <div>
      <Card>
        <CardHeader
          title={props.info.title}
          actAsExpander={true}
          showExpandableButton={true}
          subtitle={props.info.date}/>
        <CardText expandable={true}>
          {props.info.comment}
        </CardText>
      </Card>
    </div>
  )
}

export default Post;
