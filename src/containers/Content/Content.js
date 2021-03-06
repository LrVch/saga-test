import './Content.css'

import {
  Button,
  Card,
  Dimmer,
  Icon,
  Loader,
  Segment
} from 'semantic-ui-react'
import {
  getAlbums,
  getIsContentLoading,
  getIsOnLine,
  getPosts,
  getSelectedUser,
  getShowing
} from '../../store/selectors'
import {
  usersClearContent,
  usersSetSelecteduser,
  usersSetShowing
} from '../../store/actions'

import Block from '../../components/Block/Block'
import Post from '../../components/Post/Post'
import React from 'react'
import { connect } from 'react-redux'

const Content = ({
  albums,
  isContentLoading,
  isOnLine,
  posts,
  selectedUser,
  showing,
  usersClearContent,
  usersSetSelecteduser,
  usersSetShowing,
}) => {
  const handleOnClose = () => {
    usersClearContent()
    usersSetSelecteduser(null)
    usersSetShowing(null)
  }
  return (
    <>
      {selectedUser && <Segment className="content full-height">
        {!isOnLine && <Block />}
        <div className="content__header">
          <Button onClick={handleOnClose} icon>
            <Icon name='times' />
          </Button>
        </div>

        <div className="content__inner">

          {isContentLoading && <Dimmer active inverted>
            <Loader inverted>Waiting</Loader>
          </Dimmer>}

          {!isContentLoading && showing === 'posts' && <div className="content__info">
            {posts.map((post, i) => <Post post={post} key={i} />)}
          </div>}

          {!isContentLoading && showing === 'albums' && <Card.Group itemsPerRow={4}>
            {albums.map((album, i) => <Card key={i} color='green'>
              <Card.Content>
                <Card.Description>
                  {album.title}
                </Card.Description>
              </Card.Content>
            </Card>)}
          </Card.Group>}

        </div>
      </Segment>}
    </>
  )
}

const mapStateToProps = state => ({
  selectedUser: getSelectedUser(state),
  posts: getPosts(state),
  albums: getAlbums(state),
  isContentLoading: getIsContentLoading(state),
  showing: getShowing(state),
  isOnLine: getIsOnLine(state)
})

const mapDispatchToProps = dispatch => ({
  usersSetSelecteduser: id => dispatch(usersSetSelecteduser(id)),
  usersClearContent: _ => dispatch(usersClearContent()),
  usersSetShowing: type => dispatch(usersSetShowing(type))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)
