import Axios from 'axios'

export const users = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users'
})    