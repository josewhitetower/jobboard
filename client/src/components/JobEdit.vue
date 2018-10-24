<template>

  <v-layout column>
    <v-flex>
     <panel title="Edit a job">
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
            
            <v-text-field label="Description" v-model ="job.description" required  :rules="descriptionRules" textarea></v-text-field>
             <v-btn flat light @click="clear">clear</v-btn>
            <v-btn @click="save" class="blue"  :disabled="!valid">save</v-btn>
           </v-form>  
       </panel>   
    </v-flex>
  </v-layout>

</template>

<script>
import JobService from '../services/JobService'

export default {
  name: 'JobEdit',

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
  async mounted () {
    const id = this.$store.state.route.params.id
    await JobService.show(id).then(job => {
      this.job = job.data
    })
    console.log(this.job)
    this.$refs.address.update(this.job.location.address)
  },
  methods: {
    async save () {
      const Job = this.job
      const response = await JobService.put(Job)
      console.log(Job)
      console.log(response)

      if (response.data.error) {
        this.$bus.$emit('message', {message: response.data.error, color: 'error'})
      } else {
        this.$refs.form.reset()
        this.$router.push(`/jobs/${this.job._id}`)
        this.$bus.$emit('message', {message: 'Job edited', color: 'success'})
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
