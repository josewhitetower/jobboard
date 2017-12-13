import Api from './Api'

export default {
  add (credentials) {
    return Api().post('add', credentials)
  },
  getJobs () {
    return Api().get()
  }
}
