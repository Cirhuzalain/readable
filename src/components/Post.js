import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardHeader, CardText, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';

const Post = (props) => {
  return (
    <div>
      <Card>
        <CardHeader
          title={`${props.info.title}`}
          actAsExpander={true}
          showExpandableButton={true}
          subtitle={props.info.date}/>
        <CardTitle title={`${props.info.count} comments`} subtitle={`Vote : ${props.info.score}`}/>
        <CardText expandable={true}>
          {props.info.comment}
        </CardText>
        <CardActions>
          <RaisedButton icon={<ActionThumbUp />}  />
          <RaisedButton icon={<ActionThumbDown />}  />
          <Link to='/post'><RaisedButton label="View Detail" /></Link>
        </CardActions>
      </Card>
    </div>
  )
}

export default Post;
