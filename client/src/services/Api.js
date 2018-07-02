import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://jt-jobboard.herokuapp.com/'
  })
}
