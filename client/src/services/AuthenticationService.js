import Api from './Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  getJobs () {
    return Api().get()
  }
}
