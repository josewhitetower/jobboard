<template>

    <v-toolbar fixed class="cyan"  dark>
        <span class="PageHeader-logo">
            <v-toolbar-title 
                class="mr-4"
                @click="navigateTo('/')"
            >
                Job Board
            </v-toolbar-title>
        </span>
         <v-btn flat dark
                 
                    @click="navigateTo({name: 'jobs'})"
                >
                  Browse
                </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <!-- <router-link to="register"> -->
                <v-btn flat dark
                    v-if="!$store.state.isUserLoggedIn"
                    @click="navigateTo({name: 'login'})"
                >
                    Log in
                </v-btn>
                <v-btn flat dark
                    v-if="!$store.state.isUserLoggedIn"
                    @click="navigateTo({name: 'register', params : {id:123}})"
                >
                    Sign Up
                </v-btn>
                <v-btn flat dark
                    v-if="$store.state.isUserLoggedIn"
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
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.navigateTo("/");
    }
  }
};
</script>
<style scoped>
.PageHeader-logo:hover {
  cursor: pointer;
  opacity: 0.9;
}
</style>

