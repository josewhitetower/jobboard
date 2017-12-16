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
                  @click="navigateTo({ path: `/jobs/${job._id}/edit`})" 
                  class="cyan" 
                  dark
                  >Edit </v-btn>             
              </v-flex>
           
            </v-layout>
       
       
      </panel>
    </v-flex>
  </v-layout>
  
</template>
<script>
import Panel from './Panel'
import JobService from '../services/JobService.js'
export default {
  components: {
   Panel
 },
 data(){
     return {
         job: {}
     }
 },  
 async  mounted(){
     const id = this.$store.state.route.params.id
     await JobService.show(id).then(job => {
         this.job = job.data
     })
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>
<style <style scoped>

</style>


