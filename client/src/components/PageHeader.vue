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
                 <v-btn      
                    v-for="menuItem in menuItems" 
                    :key="menuItem.title"     
                    flat dark
                    :to="menuItem.route"
                    >
                    <v-icon>{{menuItem.icon}}</v-icon>
                    {{menuItem.title}}
                </v-btn>
                <v-btn flat dark
                    v-if="userIsAuthenticated"
                    @click="logout"
                >
                   <v-icon>exit_to_app</v-icon>
                   LOGOUT
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
    },
    menuItems () {
      return this.userIsAuthenticated ? [
          {title: 'ADD JOB', route: {name: 'add'}, icon: 'note_add'},
          {title: this.user.email, route: {name: 'profile'}, icon: 'person_pin'}
      ]
        : [
          {title: 'LOGIN', route: {name: 'login'}, icon: 'lock'},
          {title: 'SIGN IN', route: {name: 'register'}, icon: 'person_add'}
        ]
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

