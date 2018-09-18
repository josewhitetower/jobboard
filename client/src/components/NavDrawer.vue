<template>
     <v-navigation-drawer
      v-model="localDrawer"
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar 
            v-if="menuItems.find(item => item.avatar)"
            :to="menuItems.find(item => item.avatar).route">
          <v-list-tile-avatar>
            <img :src="menuItems.find(item => item.avatar).avatar">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{menuItems.find(item => item.avatar).title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in menuItems"
          v-if="!item.avatar"
          :key="item.title"
          :to="item.route"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
            <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>

           <v-list-tile-content @click="logout">
            <v-list-tile-title>LOGOUT</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  props: ['user', 'userIsAuthenticated', 'menuItems', 'drawer'],
  methods: {
    logout () {
      //   this.$store.dispatch('setToken', null)
      // this.$store.dispatch('setUser', null)
      this.$store.dispatch('logUserOut')
    }
  },
  data () {
    return {
      localDrawer: this.drawer
    }
  },
  watch: {
    drawer () {
      this.localDrawer = this.drawer
    },
    localDrawer () {
      this.$emit('drawer', this.localDrawer)
    }
  }
}
</script>

<style>

</style>
