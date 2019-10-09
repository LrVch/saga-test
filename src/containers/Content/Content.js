import React from 'react'
import { connect } from 'react-redux'
import { usersSetSelecteduser } from '../../store/actions'

const Content = ({
  usersSetSelecteduser
}) => {
  return (
    <div>
      <button onClick={() => usersSetSelecteduser(null)}>close</button>
    </div>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  usersSetSelecteduser: id => dispatch(usersSetSelecteduser(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)
