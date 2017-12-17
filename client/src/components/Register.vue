<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <v-form 
          class="pl-4 pr-4 pb-2 pt-2" 
          ref="form" 
          v-model="valid" 
          lazy-validation
          >     
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
                min="3"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
              counter
              ></v-text-field>
          <v-text-field
                label="Confirm Password"
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
                required
                 min="3"
              :append-icon="e2 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e2 = !e2)"
              :type="e2 ? 'password' : 'text'"
              counter
              ></v-text-field>
             
            <v-btn 
              @click="register" 
              class="cyan" dark
              :disabled="!valid"
              >register</v-btn>
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
                (v) => !!v || 'Password is required',
                (v) => v.length >= 3 || 'Password must be more than 3 characters'
            ],
            confirmPassword:'',
            confirmPasswordRules: [
              (v)=> this.password ===this.confirmPassword || 'Passwords do not coincide'],
            email: '',
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            error:null,
            alerts:false,
            e1:true,
            e2:true
        }
  },
   methods:{
    async register(){  
      
        const User = {
          email:this.email,
          password:this.password,
         
        }   
        const response = await AuthenticationService.register(User)
        console.log(User);
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
