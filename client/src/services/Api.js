import axios from 'axios'
// const baseURL= 'http://localhost:8081'
// baseURL: 'https://jt-jobboard.herokuapp.com/'
export default () => {
  return axios.create({
    baseURL: process.env.API_URL || 'http://localhost:8081/'
  })
}
