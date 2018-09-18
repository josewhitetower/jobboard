<template>

    <v-toolbar fixed class="blue"  dark>
        
            <v-toolbar-side-icon
            class="hidden-md-and-up"
            @click.native.stop="onClick">
             
            </v-toolbar-side-icon>
            <v-toolbar-title
            flat dark
            @click= "$router.push('/')" 
                >            
                Job Board 
            </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items         
         class="hidden-sm-and-down">
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
    },
    onClick () {
      this.$emit('drawer')
    }
  },
  props: ['userIsAuthenticated', 'user', 'menuItems'],
  watch: {
    user (value) {
      if (value === null || value === undefined) {
        this.$router.push('/')
        this.$bus.$emit('message', { message: 'Bye...', color: 'success' })
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

