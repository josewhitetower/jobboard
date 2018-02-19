<template>
  <v-layout column>
    <v-flex >
      <panel title = "Login">
        <v-form class="pl-4 pr-4 pb-2 pt-2" ref="form" lazy-validation v-model="valid">     
          <v-text-field
                label="E-mail"
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>
          <v-text-field
                label="Password"
                v-model="password"
                :rules="passwordRules"
                required
                :type="'password'"
              ></v-text-field>
             
            <v-btn 
              @click="login"
               class="cyan" dark
               :disabled="!valid"
               >login</v-btn>
          <v-alert color="error" icon="warning" v-model="alerts" dismissible>
             {{error}}
             </v-alert>
          </v-form> 
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from "../services/AuthenticationService.js";

export default {
 
    data () {
        return {
            valid: true,
            password: '',
            passwordRules: [
                (v) => !!v || 'Password is required'              
            ],
            email: '',
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            error:null,
            alerts:false
        }
  },
   methods:{
    async login(){  
      
        const User = {
          email:this.email,
          password:this.password,
         
        }   
        const response = await AuthenticationService.login(User)        
        console.log(response);    
        
         if (response.data.error) {
            this.error = response.data.error;
            this.alerts=true;
         }
         else{
             this.$store.dispatch('setToken', response.data.token)
             this.$store.dispatch('setUser', response.data.user)
             this.$refs.form.reset(); 
             this.$router.push('/jobs') 
         }
     
      //TODO: Redirect or update the jobs view
      //  this.$router.push('/') 
    }
  
}}
</script>
