<template>
<v-app>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <v-form class="pl-4 pr-4 pb-2 pt-2" ref="form">
            <v-text-field  label="title"  v-model ="title" > </v-text-field>
            <v-text-field label="company" v-model ="company"></v-text-field>
            <v-text-field label="description" v-model ="description" ></v-text-field>
             <v-btn flat light @click="clear">clear</v-btn>
            <v-btn @click="register" class="cyan">Register</v-btn>
            <div v-html="error" class="error"></div>
          </v-form>
      </div>
    </v-flex>
  </v-layout>
</v-app>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService';
export default {
  name: "Register",
  data() {
    return {
      title:"",
      description:"",
      company:"",
      error: null
    };
  },
  methods:{
    async register(){  
      
        const Job = {
          title:this.title,
          company:this.company,
          description:this.description
        }   
        const response = await AuthenticationService.register(Job)
        console.log(Job);
        console.log(response);
     
         this.error = response.data.error;
     
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
