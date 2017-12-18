import Api from './Api'

export default {
  add (job) {
    return Api().post('add', job)
  },
  getJobs (search) {
    return Api().get('jobs', {
      params: {
        search: search
      }
    })
  },
  show (id) {
    return Api().get(`jobs/${id}`)
  },
  put (job) {
    return Api().put(`jobs/${job._id}`, job)
  },
  delete (job) {
    console.log('deleting')
    return Api().delete(`jobs/${job._id}`)
  }
}
