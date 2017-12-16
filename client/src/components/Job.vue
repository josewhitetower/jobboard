<template>
 <v-layout column>
    <v-flex>
      <panel :title="job.title">
          
            <v-layout>
              <v-flex >
                 <div class="job-company">     {{job.company}}</div>
                <div class="job-description">     {{job.description}}</div>                
              </v-flex>
           
            </v-layout>
       
       
      </panel>
    </v-flex>
  </v-layout>
  
</template>
<script>
import Panel from './Panel';
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
  }
}
</script>
<style <style scoped>

</style>


