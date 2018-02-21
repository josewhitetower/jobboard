<template>
  
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue" dark>
          <v-toolbar-title>{{title}}</v-toolbar-title>
         <slot name="action"></slot>
        </v-toolbar>
     
        <div  class="pl-4 pr-4 pb-2 pt-2"   >     
            <slot>No Slot defined</slot>
          </div>
      </div>
   
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>

</style>
