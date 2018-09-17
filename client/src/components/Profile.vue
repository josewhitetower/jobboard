<template>
    <p>Hi, this is the profile {{user.email}}</p>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.getters.user
    }

  }
}
</script>

<style>

</style>
