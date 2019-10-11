import './Users.css';

import { Card, Dimmer, Dropdown, Loader, Pagination } from 'semantic-ui-react'
import React, { useEffect, useState } from 'react'
import { getAllUsersRequest, usersGetUserAlbumsRequest, usersGetUserPostsRequest, usersSetSelecteduser, usersSetShowing } from '../../store/actions'
import { getIsUsersLoading, getSelectedUser, getUsers } from '../../store/selectors/users'

import Block from '../../components/Block/Block';
import OfflineBage from '../../components/OfflineBage/OfflineBage';
import UserCard from '../../components/UserCard/UserCard'
import { connect } from 'react-redux'
import { getIsOnLine } from '../../store/selectors';

const Users = ({
  getAllUsersRequest,
  isUsersLoading,
  selectedUser,
  users,
  usersGetUserAlbumsRequest,
  usersGetUserPostsRequest,
  usersOnPageCount,
  usersSetSelecteduser,
  usersSetShowing,
  isOnLine,
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

  const handePosts = id => {
    usersSetSelecteduser(id)
    usersGetUserPostsRequest(id)
    usersSetShowing('posts')
  }

  const handeAlbums = id => {
    usersSetSelecteduser(id)
    usersGetUserAlbumsRequest(id)
    usersSetShowing('albums')
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
      <OfflineBage isOnLine={isOnLine}/>
      {!isOnLine && <Block />}
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
          disabled={!!selectedUser}
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
                onPosts={id => handePosts(id)}
                onAlbums={id => handeAlbums(id)}
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
  isUsersLoading: getIsUsersLoading(state),
  isOnLine: getIsOnLine(state)
})

const mapDispatchToProps = dispatch => ({
  getAllUsersRequest: _ => dispatch(getAllUsersRequest()),
  usersSetSelecteduser: id => dispatch(usersSetSelecteduser(id)),
  usersGetUserPostsRequest: id => dispatch(usersGetUserPostsRequest(id)),
  usersGetUserAlbumsRequest: id => dispatch(usersGetUserAlbumsRequest(id)),
  usersSetShowing: type => dispatch(usersSetShowing(type))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
