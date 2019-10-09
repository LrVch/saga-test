import { albums, posts, users } from '../axios'

class UserService {

  static getAllusers() {
    return users.get().then(({ data }) => data)
  }

  static getUserPosts(id) {
    return posts.get(`?userId=${id}`).then(({ data }) => data)
  }

  static getUserAlbums(id) {
    return albums.get(`?userId=${id}`).then(({ data }) => data)
  }
}

export default UserService