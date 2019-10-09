import './Content.css'

import { Button, Icon, Segment } from 'semantic-ui-react'
import { getUserAlbums, getUserPosts } from '../../store/sagas/users'
import { usersClearContent, usersSetSelecteduser, usersSetShowing } from '../../store/actions'

import React from 'react'
import { connect } from 'react-redux'
import { getSelectedUser } from '../../store/selectors/users'

const Content = ({
  usersSetSelecteduser,
  selectedUser,
  usersClearContent,
  usersSetShowing
}) => {
  const handleOnClose = () => {
    usersClearContent()
    usersSetSelecteduser(null)
    usersSetShowing(null)
  }
  return (
    <>
    {selectedUser && <Segment className="content full-height">
      <div className="content__header">
        <Button onClick={handleOnClose} icon>
          <Icon name='times' />
        </Button>
      </div>
      <div className="content__inner">
        content
      </div>
    </Segment>}
    </>
  )
}

const mapStateToProps = state => ({
  selectedUser: getSelectedUser(state),
  posts: getUserPosts(state),
  albums: getUserAlbums(state)
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
