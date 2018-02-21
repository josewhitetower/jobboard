<template>
 <v-layout column>
    <v-flex>
      <panel :title="job.title">
          
            <v-layout>
              <v-flex >
                 <div class="job-company">     {{job.company}}</div>
                <div class="job-description">     {{job.description}}</div>   
                 <v-btn 
                 v-if="$store.state.isUserLoggedIn"  
                  :to="{ path: `/jobs/${job._id}/edit`}" 
                  class="blue" 
                  dark
                  >Edit </v-btn>             
                 <v-btn 
                 v-if="$store.state.isUserLoggedIn" 
                 @click="deleteJob"
                  class="danger"                   
                  dark
                  >Delete </v-btn>             
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
    }
  }
}
</script>
<style <style scoped>

</style>


