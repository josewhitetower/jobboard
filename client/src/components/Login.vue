<template>
  <v-layout column>
    <v-flex >
      <panel title = "Login">
        <v-form class="pl-4 pr-4 pb-2 pt-2" ref="form" v-model="valid">     
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
              @click.prevent="login"
               class="blue" dark
               :disabled="!valid"
               >login</v-btn>
              
          </v-form> 
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>

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
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/jobs')
        this.$bus.$emit('message', {message: 'Welcome...', color: 'success'})
      }
    },
    error (value) {
      if (value !== null && value !== undefined) {
        this.$bus.$emit('message', {message: value, color: 'error'})
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    }

  }

}
</script>
