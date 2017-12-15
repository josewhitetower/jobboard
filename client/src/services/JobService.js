import Api from './Api'

export default {
  add (credentials) {
    return Api().post('add', credentials)
  },
  getJobs () {
    return Api().get()
  },
  show (id) {
    return Api().get(`jobs/${id}`)
  }
}
