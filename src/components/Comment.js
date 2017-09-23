import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardText, CardActions, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';

const Comment = (props) => {
  return (
    <div>
      <Card>
        <CardHeader
          title={`Posted by ${props.info.author}`}
          actAsExpander={true}
          showExpandableButton={true}
          subtitle={props.info.date}/>
        <CardTitle subtitle={`Score : 8`} />
        <CardText expandable={true}>
          {props.info.body}
        </CardText>
        <CardActions>
          <RaisedButton icon={<ActionThumbUp />}  />
          <RaisedButton icon={<ActionThumbDown />}  />
          <Link to='/comment/edit'>
            <RaisedButton label="Edit" />
          </Link>
          <RaisedButton label="Delete" />
        </CardActions>
      </Card>
    </div>
  )
}

export default Comment;
