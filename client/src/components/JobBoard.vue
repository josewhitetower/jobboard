<template>
  <div >
  
  </div>
</template>

<script>

import JobService from '../services/JobService';
export default {
  name: "JobBoard",
    data() {
    return {
      title: "Job Board",
      jobs: []
    };
  },
  mounted:function () {    
     JobService.getJobs()
      .then( params =>  this.jobs=params.data)
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
