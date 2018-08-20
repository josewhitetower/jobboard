import axios from 'axios'
// const baseURL= 'http://localhost:8081'
export default () => {
  return axios.create({
    baseURL: 'https://jt-jobboard.herokuapp.com/'
  })
}
