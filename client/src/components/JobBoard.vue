<template>
  <v-layout column>
    <v-flex>
      <search></search>
      <panel title="Jobs" class="mt-3">
        <router-link 
          :to="{name: 'add'}"
           slot="action"
           >
              <v-btn      
                v-if="userIsAuthenticated"       
                fab
                class="blue accent-2"
                light
                small
                absolute
                right
                middle
             >
            <v-icon>add</v-icon>
        </v-btn>
        </router-link>
          <v-card v-for="job in jobs" :key="job.id" class="job">
            <v-layout>
              <v-flex >
                <div class="job-title ">     {{job.title}}</div>
                <div class="job-company">     {{job.company}}</div>
                <div class="job-description">     {{job.description}}</div>
                  <v-btn 
                 :to="{ path: `jobs/${job._id}`}" 
                  class="blue" dark >View</v-btn>
              </v-flex>
           
            </v-layout>
       
          </v-card>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Search from './Search'
import JobService from '../services/JobService'
export default {
  name: 'JobBoard',
  components: {
    Search
  },
  data () {
    return {
      title: 'Job Board',
      jobs: [],
      id: null
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    userIsAuthenticated () {
      return this.$store.getters.userIsAuthenticated
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        await JobService.getJobs(value).then(jobs => (this.jobs = jobs.data))
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.job {
  border-bottom: 2px solid blue;
  margin-top: 20px;
  padding: 10px;
  /* height: 200px; */
}
.job-title {
  font-size: 30px;
  text-align: left;
}
.job-company {
  margin-top: 10px;
  text-align: left;
  font-size: 24px;
}
.job-description {
  margin-top: 7px;
  font-size: 18px;
  text-align: justify;
}
</style>
