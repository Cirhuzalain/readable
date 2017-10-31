import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardText, CardActions, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import { format } from 'date-fns';

const Comment = (props) => {
  return (
    <div>
      <Card>
        <CardHeader
          title={`Posted by ${props.info.author}`}
          actAsExpander={true}
          showExpandableButton={true}
          subtitle={format(new Date(props.info.timestamp), 'MM/DD/YYYY')}/>
        <CardTitle subtitle={props.info.voteScore} />
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
