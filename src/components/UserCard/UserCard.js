import { Button, Card, Image, Segment } from 'semantic-ui-react'

import React from 'react'

const UserCard = ({
  user: {
    name, username, email,
    address: {
      street,
      suite,
      city,
      zipcode
    },
    phone,
    website,
    company: {
      name: cName,
      catchPhrase,
    }
  }
}) => {
  return (

    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{username}</Card.Meta>
        <Card.Meta>{email}</Card.Meta>
        <Card.Description>
          <Card.Meta>Address</Card.Meta>
          {`${street} ${suite} ${city} ${zipcode}`}
        </Card.Description>
        <br />
        <Card.Description>
          <Card.Meta>Phone</Card.Meta>
          {phone}
        </Card.Description>
        <br />
        <Card.Description>
          <Card.Meta>Address</Card.Meta>
          {`${cName}: ${catchPhrase} `}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Posts
          </Button>
          <Button basic color='green'>
            Albums
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default UserCard
