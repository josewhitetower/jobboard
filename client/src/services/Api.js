import axios from 'axios'
const prod = true
let baserURL
if (prod) {
  baserURL = `http://138.68.94.242:443/`
} else {
  baserURL = 'http://localhost:8081'
}
export default () => {
  return axios.create({
    baseURL: baserURL
  })
}
