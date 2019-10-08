import { users } from '../axios'

class UserService {

  static getAllusers() {
    return users.get().then(({ data }) => data)
  }
}

export default UserService