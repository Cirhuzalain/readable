import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardHeader, CardText, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import { format } from 'date-fns';

const Post = (props) => {
  return (
    <div>
      <Card>
        <CardHeader
          title={`${props.info.title}`}
          actAsExpander={true}
          showExpandableButton={true}
          subtitle={format(new Date(props.info.timestamp), 'MM/DD/YYYY')} />
        <CardTitle title={props.info.comments.length > 1 ? `${props.info.comments.length} comments` :  `${props.info.comments.length} comment`} subtitle={`Vote : ${props.info.voteScore}`}/>
        <CardText expandable={true}>
          {props.info.body}
        </CardText>
        <CardActions>
          <RaisedButton icon={<ActionThumbUp />}  />
          <RaisedButton icon={<ActionThumbDown />}  />
          <Link to={`/${props.info.category}/${props.info.id}`}><RaisedButton label="View Detail" /></Link>
        </CardActions>
      </Card>
    </div>
  )
}

export default Post;
