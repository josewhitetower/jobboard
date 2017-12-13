<template>

  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Job</v-toolbar-title>
        </v-toolbar>
        <v-form class="pl-4 pr-4 pb-2 pt-2" ref="form">
            <v-text-field  label="Title"  v-model ="title" > </v-text-field>
            <v-text-field label="Company" v-model ="company"></v-text-field>
            <v-text-field label="Description" v-model ="description" ></v-text-field>
             <v-btn flat light @click="clear">clear</v-btn>
            <v-btn @click="add" class="cyan">add</v-btn>
          <v-alert color="error" icon="warning" v-model="alerts" dismissible>
             {{error}}
             </v-alert>
          </v-form>
      </div>
    </v-flex>
  </v-layout>

</template>

<script>
import JobService from '../services/JobService';
export default {
  name: "JobAdd",
  data() {
    return {
      title:"",
      description:"",
      company:"",
      error: "",
      alerts:false
    };
  },
  methods:{
    async add(){  
      
        const Job = {
          title:this.title,
          company:this.company,
          description:this.description
        }   
        const response = await JobService.add(Job)
        console.log(Job);
        console.log(response);
     
        
         if (response.data.error) {
            this.error = response.data.error;
            this.alerts=true;
         }
     
      //TODO: Redirect or update the jobs view
      //  this.$router.push('/') 
    },
    clear(){
      this.$refs.form.reset(); 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
