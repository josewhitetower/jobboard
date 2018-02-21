<template>
  <v-layout column>
    <v-flex >
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
              class="blue" dark
              :disabled="!valid"
              >register</v-btn>
           </v-form>      
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '../services/AuthenticationService.js'
export default {

  data () {
    return {
      valid: true,
      password: '',
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 3 || 'Password must be more than 3 characters'
      ],
      confirmPassword: '',
      confirmPasswordRules: [
        (v) => this.password === this.confirmPassword || 'Passwords do not coincide'],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      e1: true,
      e2: true
    }
  },
  methods: {
    async register () {
      const User = {
        email: this.email,
        password: this.password

      }
      await AuthenticationService.register(User)
        .then(res => {
          if (res.data.error) {
            this.$bus.$emit('message', {message: res.data.error, color: 'error'})
          } else {
            this.$store.dispatch('setToken', res.data.token)
            this.$store.dispatch('setUser', res.data.user)
            this.$refs.form.reset()
            this.$router.push('/jobs')
            this.$bus.$emit('message', {message: 'User succesfully registered', color: 'success'})
          }
        })

      // TODO: Redirect or update the jobs view
      //  this.$router.push('/')
    }

  }}
</script>
