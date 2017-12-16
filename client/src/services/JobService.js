import Api from './Api'

export default {
  add (job) {
    return Api().post('add', job)
  },
  getJobs () {
    return Api().get()
  },
  show (id) {
    return Api().get(`jobs/${id}`)
  },
  put (job) {
    return Api().put(`jobs/${job._id}`, job)
  }
}
