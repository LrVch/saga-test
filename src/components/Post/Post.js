import { Card } from 'semantic-ui-react'
import React from 'react'

const Post = ({post: {title, body}}) => {
  return (
    <Card className="full-width">
      <Card.Content header={title} />
      <Card.Content description={body} />
    </Card>
  )
}

export default Post
