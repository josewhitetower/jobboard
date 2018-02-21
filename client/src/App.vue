<template>

    <v-app>     
      <v-content fluid>
        <v-container>
           <div id="app"
           >
           <page-header></page-header>
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

export default {
  name: 'app',
  components: {
    PageHeader
  },
  data () {
    return {
      snackbar: null,
      text: null,
      color: null,
      timeout: 3000
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
