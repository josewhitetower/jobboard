<template>

  <v-layout column>
    <v-flex>
     <panel title="Add a job">
        <v-form class="pl-4 pr-4 pb-2 pt-2" ref="form"  v-model="valid">
            <v-text-field  label="Title"  v-model ="job.title" required :rules="titleRules" > </v-text-field>
            <v-text-field label="Company" v-model ="job.company" required :rules="companyRules" ></v-text-field>          
            <vuetify-google-autocomplete
                id="map"
                append-icon="search"
                placeholder="Address *"
                ref="address"
                :required="true"
                :rules="addressRules"
                 v-on:placechanged="getAddressData">
          </vuetify-google-autocomplete>
            <v-text-field type="number" label="Address Lng" v-model ="job.location.coordinates[0]" required :rules="addressRules" ></v-text-field>
            <v-text-field type="number" label="Address Lat" v-model ="job.location.coordinates[1]" required :rules="addressRules" ></v-text-field>
            <v-text-field label="Description" v-model ="job.description" required  :rules="descriptionRules" textarea></v-text-field>
             <v-btn flat light @click="clear">clear</v-btn>
            <v-btn @click="add" class="blue"  :disabled="!valid">add</v-btn>
          </v-form>  
       </panel>   
    </v-flex>
  </v-layout>

</template>

<script>
import JobService from '../services/JobService'

export default {
  name: 'JobAdd',

  data () {
    return {
      valid: true,
      job: {
        location: {
          address: '',
          coordinates: []
        }
      },
      titleRules: [
        (v) => !!v || 'Title is required'
      ],
      companyRules: [
        (v) => !!v || 'Company is required'
      ],
      addressRules: [
        (v) => !!v || 'Address is required'
      ],
      descriptionRules: [
        (v) => !!v || 'Description is required'
      ]

    }
  },
  methods: {
    async add () {
      const Job = this.job
      const response = await JobService.add(Job)
      console.log(Job)
      console.log(response)
      if (response.data.error) {
        this.$bus.$emit('message', {message: response.data.error, color: 'error'})
      } else {
        this.$refs.form.reset()
        this.$router.push('/jobs')
        this.$bus.$emit('message', {message: 'Job saved', color: 'success'})
      }
    },
    clear () {
      this.$refs.form.reset()
      this.$refs.address.clear()
    },
    /**
            * When the location found
            * @param {Object} addressData Data of the found location
            * @param {Object} placeResultData PlaceResult object
            * @param {String} id Input container ID
            */
    getAddressData (addressData, placeResultData, id) {
      this.job.location.coordinates[0] = placeResultData.geometry.location.lng()
      this.job.location.coordinates[1] = placeResultData.geometry.location.lat()
      this.job.location.address = placeResultData.formatted_address
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
