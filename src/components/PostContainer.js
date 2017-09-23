import React from 'react';
import { Link }from 'react-router-dom';
import {Card, CardActions, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';

const PostDetail = () => {
  return (
    <div className='post-container'>
      <Card>
        <CardHeader
          title="Post Title"
          subtitle="Post by Alino"/>
        <CardTitle title={`5 comments`} subtitle={`Vote : 10`}/>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <RaisedButton icon={<ActionThumbUp />}  />
          <RaisedButton icon={<ActionThumbDown />}  />
          <Link to='/post/edit'><RaisedButton label="Edit" /></Link>
          <RaisedButton label="Delete" />
        </CardActions>
      </Card>
    </div>
  )
}

export default PostDetail;
