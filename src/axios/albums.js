import Axios from 'axios'

export const albums = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/albums'
})    