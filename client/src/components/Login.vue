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
               class="blue" dark
               :disabled="!valid"
               >login</v-btn>
              
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
        (v) => !!v || 'Password is required'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    async login () {
      const User = {
        email: this.email,
        password: this.password

      }
      await AuthenticationService.login(User)
      .then(res => {
        if (res.data.error) {
          this.EventBus.$emit('message', {message: res.data.error, color: 'error'})
        } else {
          this.$store.dispatch('setToken', res.data.token)
          this.$store.dispatch('setUser', res.data.user)
          this.text = res.data.message
          this.color = 'success'
          this.snackbar = true
          this.$refs.form.reset()
          this.$router.push('/')
          this.$bus.$emit('message', {message: 'Welcome...', color: 'success'})
        }
      })
      .catch(err => console.log(err))

      //   this.$router.push('/jobs')
      // }

      // TODO: Redirect or update the jobs view
      //  this.$router.push('/')
    }

  }}
</script>
