<template>

    <v-app>     
      <v-content fluid>
        <v-container>
           <div id="app">
           <page-header></page-header>
           <router-view/>
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
