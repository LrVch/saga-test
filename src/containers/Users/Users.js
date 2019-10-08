import React, { useEffect } from 'react'

import { Card } from 'semantic-ui-react'
import UserCard from '../../components/UserCard/UserCard'
import { connect } from 'react-redux'
import { getAllUsersRequest } from '../../store/actions'
import { getusers } from '../../store/selectors/users'

const Users = ({
  users,
  getAllUsersRequest
}) => {
  useEffect(() => {
    getAllUsersRequest()
  }, [getAllUsersRequest])

  return (
    <Card.Group>
      {users.map((user, i) => {
        return (
          <UserCard key={i} user={user}/>
        )
      })}
    </Card.Group>
  )
}

const mapStateToProps = state => ({
  users: getusers(state)
})

const mapDispatchToProps = dispatch => ({
  getAllUsersRequest: () => dispatch(getAllUsersRequest())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
