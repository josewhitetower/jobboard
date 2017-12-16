<template>
  <v-layout column>
    <v-flex>
      <panel title="Jobs">
        <router-link 
          :to="{name: 'add'}"
           slot="action"
           >
              <v-btn      
                v-if="$store.state.isUserLoggedIn"       
                fab
                class="cyan accent-2"
                light
                small
                absolute
                right
                middle
             >
            <v-icon>add</v-icon>
        </v-btn>
        </router-link>
          <div v-for="job in jobs" :key="job.id" class="job">
            <v-layout>
              <v-flex >
                <div class="job-title">     {{job.title}}</div>
                <div class="job-company">     {{job.company}}</div>
                <div class="job-description">     {{job.description}}</div>
                  <v-btn 
                  @click="navigateTo({ path: `jobs/${job._id}`})" 
                  class="cyan" dark >View</v-btn>
              </v-flex>
           
            </v-layout>
       
          </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "./Panel";
import JobService from "../services/JobService";
export default {
  name: "JobBoard",
  components: {
    Panel
  },
  data() {
    return {
      title: "Job Board",
      jobs: [],
      id: null
    };
  },
  mounted: async function() {
    await JobService.getJobs().then(jobs => (this.jobs = jobs.data));
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.job{
  border: 2px solid cyan;
  margin-top: 20px;
  padding: 10px;
  height: 200px;

}
.job-title{
  font-size: 30px;
  text-align: left;
}
.job-company{
  text-align: left;
  font-size: 24px;
}
.job-description {
  font-size: 18px;
  text-align: center;
}
</style>
