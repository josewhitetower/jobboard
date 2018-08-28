<template>

    <v-toolbar fixed class="blue"  dark>
        <span class="PageHeader-logo">
            <v-toolbar-title 
                class="mr-4">
                <router-link
                    class="home"
                    tag ="span"
                    :to = "{path : '/'}"
                >
                    Job Board
                </router-link>
            </v-toolbar-title>
        </span>
         <v-btn flat dark                 
                    :to="{name: 'jobs'}"
                >
                  Browse
                </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <!-- <router-link to="register"> -->
                <v-btn flat dark
                    v-if="!userIsAuthenticated"
                    :to="{name: 'login'}"
                >
                    Log in
                </v-btn>
                <v-btn flat dark
                    v-if="!userIsAuthenticated"
                    :to="{name: 'register'}"
                >
                    Sign Up
                </v-btn>
                <v-btn flat dark
                    v-if="userIsAuthenticated"
                    @click="logout"
                >
                   Log out
                </v-btn>
            <!-- </router-link> -->
        </v-toolbar-items>

    </v-toolbar>

</template>
<script>
export default {
  methods: {

    logout () {
    //   this.$store.dispatch('setToken', null)
     // this.$store.dispatch('setUser', null)
      this.$store.dispatch('logUserOut')
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
    user (value) {
      if (value === null || value === undefined) {
        this.$router.push('/')
        this.$bus.$emit('message', {message: 'Bye...', color: 'success'})
      }
    }
  }
}
</script>
<style scoped>
.PageHeader-logo:hover {
  cursor: pointer;
  opacity: 0.9;
}
</style>

