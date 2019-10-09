import Axios from 'axios'

export const posts = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts'
})    