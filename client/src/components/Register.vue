<template>
<v-app>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pb-2 pt-2">
            <v-text-field  label="title"  ref ="title" > </v-text-field>
            <v-text-field label="company" ref ="company"></v-text-field>
            <v-text-field label="description" ref ="description" ></v-text-field>
            <v-btn @click="register">Register</v-btn>
             <v-btn @click="clear">clear</v-btn>
            <div v-html="error" class="error"></div>
          </div>
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
      error: null
    };
  },
  methods:{
    async register(){  
      
        const Job = {
          title:this.$refs.title.value,
          company:this.$refs.company.value,
          description:this.$refs.description.value        
        }   
        const response = await AuthenticationService.register(Job)
        console.log(response);
     
         this.error = response.data.error;
     
      //TODO: Redirect or update the jobs view
      //  this.$router.push('/') 
    },
    clear(){
      this.$refs.title.value=""
      this.$refs.company.value=""
      this.$refs.description.value=""
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
