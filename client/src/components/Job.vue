<template>
 <v-layout column>
    <v-flex>
      <panel :title="job.title">
          
            <v-layout>
              <v-flex >
                 <div class="job-company">     {{job.company}}</div>
                <div class="job-description">     {{job.description}}</div>   
                 <v-btn 
                 v-if="isAuthor"  
                  :to="{ path: `/jobs/${job._id}/edit`}" 
                  class="blue" 
                  dark
                  >Edit </v-btn>             
                 <v-btn 
                 v-if="isAuthor" 
                 @click="deleteJob"
                  class="danger"                   
                  dark
                  >Delete </v-btn>             
                 <v-btn 
                 v-if="!isAuthor" 
                 @click="apply"
                  class="blue"                   
                  dark
                  >{{applyButtonText}} </v-btn>             
              </v-flex>
           
            </v-layout>
       
       
      </panel>
    </v-flex>
  </v-layout>
  
</template>
<script>
import JobService from '../services/JobService.js'
export default {
  data () {
    return {
      job: {}
    }
  },
  async mounted () {
    const id = this.$store.state.route.params.id
    await JobService.show(id).then(job => {
      this.job = job.data
    })
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    userIsAuthenticated () {
      return this.$store.getters.userIsAuthenticated
    },
    isAuthor () {
      return this.user && this.user.uid === this.job.author
    },
    applyButtonText () {
      return this.job.applicants &&
            this.job.applicants.includes(this.user && this.user.uid)
            ? 'Unapply'
            : 'Apply'
    }
  },
  methods: {
    async deleteJob () {
      await JobService.delete(this.job).then((res) => {
        if (res.data.error) {
          this.$bus.$emit('message', {message: res.data.error, color: 'error'})
        } else {
          this.$router.push('/jobs')
          this.$bus.$emit('message', {message: 'Job deleted', color: 'success'})
        }
      })
    },
    async apply () {
      if (!this.user) {
        this.$router.push('/login')
      }
      const application = {
        job: this.job._id,
        user: this.user.uid
      }
      await JobService.apply(application).then((res) => {
        if (res.data.error) {
          this.$bus.$emit('message', {message: res.data.error, color: 'error'})
        } else {
          this.$bus.$emit('message', {message: res.data.message, color: 'success'})
          this.job = res.data.job
        }
      })
    }
  }
}
</script>
<style <style scoped>

</style>


