<template>

  <v-layout column>
    <v-flex xs6 offset-xs3>
     <panel title="Add a job">
        <v-form class="pl-4 pr-4 pb-2 pt-2" ref="form" lazy-validation v-model="valid">
            <v-text-field  label="Title"  v-model ="job.title" required :rules="titleRules" > </v-text-field>
            <v-text-field label="Company" v-model ="job.company" required :rules="companyRules" ></v-text-field>
            <v-text-field label="Description" v-model ="job.description" required  :rules="descriptionRules" ></v-text-field>
             <v-btn flat light @click="clear">clear</v-btn>
            <v-btn @click="add" class="cyan"  :disabled="!valid">add</v-btn>
          <v-alert color="error" icon="warning" v-model="alerts" dismissible>
             {{error}}
             </v-alert>
          </v-form>  
       </panel>   
    </v-flex>
  </v-layout>

</template>

<script>
import JobService from '../services/JobService';
import Panel from './Panel';
export default {
  name: "JobAdd",
  components:{
    Panel
  },
  data() {
    return {
      valid: true,
      job:  {        
        title:"",
        description:"",
        company:"",
      },
      error: "",
      alerts:false,
      titleRules: [
                (v) => !!v || 'Title is required'              
            ],
      companyRules: [
                (v) => !!v || 'Company is required'              
            ],
      descriptionRules: [
                (v) => !!v || 'Description is required'              
            ],
            
    };
  },
  methods:{
    async add(){  
      
        const Job = this.job
        const response = await JobService.add(Job)
        console.log(Job);
        console.log(response);
     
        
         if (response.data.error) {
            this.error = response.data.error;
            this.alerts=true;
         } else {            
            this.$refs.form.reset(); 
            this.$router.push('/jobs') 
         }
    },
    clear(){
      this.$refs.form.reset(); 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
