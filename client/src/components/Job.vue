<template>
  
</template>
<script>
import JobService from '../services/JobService.js'
export default {
 data(){
     return {
         job:null
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


