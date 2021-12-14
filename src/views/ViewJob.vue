<template>
  <div>
    <main-header />
    <div class="relative">
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-10 bg-gray-50">
          <div>
            <div class="mt-6">
              <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
                {{ jobs.title }}
              </h2>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mt-5" v-if="jobs.type"> {{ jobs.type.replace('_', ' ').toUpperCase() }} </span>
              <p> {{ jobs.vacancy }} open position </p> 
            <div class="mt-8 border-t border-gray-200 pt-6">
              <h4 class=" font-bold"> Job Details </h4>
              <p v-if="jobs.education_level"> Education Level: {{ jobs.education_level.replace('_', ' ').toUpperCase() }} </p> 
              <p v-if="jobs.hide_salary === 0"> Salary: {{ jobs.salary_min }} </p> 
              <p v-if="jobs.hide_salary == 1"> Salary: Confidential </p> 
              <p v-if="jobs.career_level"> Career Level: {{ jobs.career_level.replace('_', ' ').toUpperCase() }} </p> 
              <p> Experience Needed: {{ jobs.min_exp_y }} to {{ jobs.max_exp_y }} years </p> 
            </div>
              <div class="mt-6 text-xl">
                <a href="#" class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-indigo-700">
                  Apply For Job
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
          <div>
            <div class="mt-6">
              <h2 class="text-xl font-extrabold tracking-tight text-gray-900">
                Job Description
              </h2>
                <p class="mt-4 text-lg text-gray-500" v-html="jobs.job_description"></p>
            </div>
          </div>
          <div class="mt-8 border-t border-gray-200 pt-6">
            <h2 class="text-xl font-extrabold tracking-tight text-gray-900">
                Job Requirements
            </h2>
            <p class="mt-4 text-lg text-gray-500" v-html="jobs.job_requirements"></p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import mainHeader from '../components/Header.vue'
export default {
  components: {
    mainHeader
  },
  data() {
    return {
      jobs: {},
    }
  },
  mounted() {
    this.getJobs()
  },
  methods: {
    getJobs() {
      axios.get('http://careers.technocloud.live/api/jobs').then(res => {
        const jobs = res.data.data
        const filteredJob = jobs.find(job => job.id == this.$route.params.id)
        this.jobs = filteredJob
      })
    },
  }
}
</script>

<style>

</style>
