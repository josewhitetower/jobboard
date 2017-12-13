<template>

    <v-toolbar fixed class="cyan"  dark>
        <span class="PageHeader-logo">
            <v-toolbar-title 
                class="mr-4"
                @click="navigateTo({name: '/'})"            
            >
                Job Board
            </v-toolbar-title>
        </span>
        <!-- <v-toolbar-items>
            <v-btn flat dark>
                Browse
            </v-btn>
        </v-toolbar-items> -->
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <!-- <router-link to="register"> -->
                <v-btn flat dark
                    @click="navigateTo({name: 'login'})"
                >
                    Log in
                </v-btn>
                <v-btn flat dark
                    @click="navigateTo({name: 'register'})"
                >
                    Sign Up
                </v-btn>
            <!-- </router-link> -->
        </v-toolbar-items>

    </v-toolbar>

</template>
<script>

export default {
    methods: {
        navigateTo(route){
            this.$router.push(route)
        }
    }
}
</script>
<style scoped>
.PageHeader-logo:hover{
    cursor: pointer;
    opacity: 0.9;
}

</style>

