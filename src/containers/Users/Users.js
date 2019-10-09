import './Users.css';

import { Card, Dimmer, Dropdown, Loader, Pagination } from 'semantic-ui-react'
import React, { useEffect, useState } from 'react'
import { getAllUsersRequest, usersSetSelecteduser } from '../../store/actions'
import { getIsUsersLoading, getSelectedUser, getUsers } from '../../store/selectors/users'

import UserCard from '../../components/UserCard/UserCard'
import { connect } from 'react-redux'

const Users = ({
  getAllUsersRequest,
  selectedUser,
  users,
  usersSetSelecteduser,
  usersOnPageCount,
  isUsersLoading
}) => {
  const [pageUsers, setPageUsers] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [usersOnPage, setUsersOnPage] = useState(0)
  const [activePage, setActivePage] = useState(1)

  const onPageChange = index => {
    setActivePage(index)
  }

  const onPageCountChange = value => {
    setUsersOnPage(parseInt(value))
  }

  useEffect(() => {
    const isIntegerCount = users.length % usersOnPage === 0
    const totalPages = isIntegerCount ? users.length / usersOnPage : parseInt(users.length / usersOnPage) + 1
    users.length && usersOnPage && setTotalPages(totalPages)
  }, [setTotalPages, usersOnPage, users])

  useEffect(() => {
    if (totalPages && users.length) {
      if (activePage > totalPages) {
        setActivePage(totalPages)
      } else {
        const offset = usersOnPage * (activePage - 1)
        const res = users.slice(offset, offset + usersOnPage)
        res.length && setPageUsers(res)
      }
    }
  }, [users, usersOnPage, activePage, totalPages])

  useEffect(() => {
    getAllUsersRequest()
  }, [getAllUsersRequest])

  useEffect(() => {
    setUsersOnPage(usersOnPageCount)
  }, [usersOnPageCount])

  return (
    <div className="users">
      <div className="users__pagination" style={{
        opacity: !pageUsers.length ? 0 : 1,
      }}>
        <Pagination
          secondary
          pointing
          disabled={!!selectedUser}
          boundaryRange={0}
          activePage={activePage}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={totalPages}
          onPageChange={(_, data) => onPageChange(data.activePage)}
        />
        <Dropdown
          onChange={(_, {value}) => onPageCountChange(value)}
          selection
          floating
          value={usersOnPage}
          options={[
            {
              key: 2,
              text: '2',
              value: 2
            },
            {
              key: 3,
              text: '3',
              value: 3
            },
            {
              key: 4,
              text: '4',
              value: 4
            },
          ]}
        />
      </div>
      <div className="users__inner">
        {isUsersLoading}
        <div className={"users__container " + (isUsersLoading && "users__container_loaded")}>
          <Dimmer active inverted>
            <Loader inverted>Waiting</Loader>
          </Dimmer>
        </div>

        <Card.Group className={"users__container " + (!isUsersLoading && "users__container_loaded")}>
          {pageUsers.length > 0 && pageUsers.map((user, i) => {
            return (
              <UserCard
                disabled={selectedUser && user.id !== selectedUser}
                onPosts={id => usersSetSelecteduser(id)}
                onAlbums={id => usersSetSelecteduser(id)}
                key={i}
                user={user}
              />
            )
          })}
        </Card.Group>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  users: getUsers(state),
  selectedUser: getSelectedUser(state),
  isUsersLoading: getIsUsersLoading(state)
})

const mapDispatchToProps = dispatch => ({
  getAllUsersRequest: () => dispatch(getAllUsersRequest()),
  usersSetSelecteduser: (id) => dispatch(usersSetSelecteduser(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
