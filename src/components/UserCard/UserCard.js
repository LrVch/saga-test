import { Button, Card } from 'semantic-ui-react'

import React from 'react'

const UserCard = ({
  user: {
    id,
    name, username, email,
    address: {
      street,
      suite,
      city,
      zipcode
    },
    phone,
    company: {
      name: cName,
      catchPhrase,
    }
  },
  disabled,
  onPosts= () => {},
  onAlbums = () => {}
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
          <Button disabled={disabled} onClick={onPosts.bind(null, id)} basic color='green'>
            Posts
          </Button>
          <Button disabled={disabled} onClick={onAlbums.bind(null, id)} basic color='green'>
            Albums
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default UserCard
