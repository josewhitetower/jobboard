<template>

    <v-app>     
      <v-content fluid>
        <v-container>
           <div id="app">
          <nav-drawer
          class="hidden-md-and-up"
          :drawer="drawer"
          :menu-items="menuItems"
          :user="user"
          :user-is-authenticated="userIsAuthenticated"
          ></nav-drawer>
           <page-header 
           @drawer="drawer =!drawer"
           :user="user"
           :menu-items="menuItems"
           :user-is-authenticated="userIsAuthenticated">
           </page-header>
           
           <router-view/>
           <v-snackbar
              v-model="snackbar"
              :color= color
              :timeout="timeout"
              top
            >
              {{ text }}
              <v-btn dark flat @click.native="snackbar = false">x</v-btn>
           </v-snackbar>
             </div>
        </v-container>
      </v-content>

    </v-app>

</template>

<script>
import PageHeader from './components/PageHeader'
import NavDrawer from './components/NavDrawer'

export default {
  name: 'app',
  components: {
    PageHeader,
    NavDrawer
  },
  data () {
    return {
      snackbar: null,
      text: null,
      color: null,
      timeout: 3000,
      drawer: null
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
        {title: this.user.email, route: {name: 'profile'}, avatar: 'https://randomuser.me/api/portraits/men/85.jpg'},
        {title: 'ADD JOB', route: {name: 'add'}, icon: 'note_add'}
      ]
        : [
          {title: 'LOGIN', route: {name: 'login'}, icon: 'lock'},
          {title: 'SIGN IN', route: {name: 'register'}, icon: 'person_add'}
        ]
    }
  },
  mounted () {
    this.$bus.$on('message', payload => {
      this.snackbar = true
      this.text = payload.message
      this.color = payload.color
    })
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
