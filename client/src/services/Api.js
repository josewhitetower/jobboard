import axios from 'axios'
const prod = false
let baserURL
if (prod) {
  baserURL = `http://159.89.27.255/`
} else {
  baserURL = 'http://localhost:8081'
}
export default () => {
  return axios.create({
    baseURL: baserURL
  })
}
