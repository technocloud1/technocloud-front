<template>
  <div>
    <main-heder />
    <div class="bg-white">
      <!-- Header -->
      <div class="relative pb-32 bg-gray-800">
        <div class="absolute inset-0">
          <img class="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt="" />
          <div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 class="
              text-4xl
              font-extrabold
              tracking-tight
              text-white
              md:text-5xl
              lg:text-6xl
            ">
            Careers
          </h1>
          <p class="mt-6 max-w-3xl text-xl text-gray-300">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames. Dui, amet, nec sit pulvinar.
          </p>
        </div>
      </div>

      <!-- Overlapping cards -->
      <section class="
          max-w-7xl
          mx-auto
          relative
          z-10
          px-4
          sm:px-6
          lg:px-8
        " aria-labelledby="contact-heading">
        <h2 class="sr-only" id="contact-heading">Contact us</h2>
        <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          <!-- <div
            v-for="link in jobs"
            :key="link.id"
            class="flex flex-col bg-white rounded-2xl shadow-xl mt-10"
          >
            <div class="flex-1 relative pt-6 px-6 pb-8 md:px-8">
              <h3 class="text-xl font-medium text-gray-900">{{ link.title }}</h3>
              <p class="mt-4 text-base text-gray-500" v-html="link.job_description.slice(0, 150)"></p>
            </div>
            <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
              <a
                class="
                  text-base
                  font-medium
                  text-blue-700
                  hover:text-blue-600
                  cursor-pointer
                "
                >
                <router-link :to="{ name: 'view-job', params: { id: link.id }}">
                  Apply Now
                </router-link>
                <span aria-hidden="true"> &rarr;</span></a>
            </div>
          </div> -->
        </div>
      </section>
      <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div class="text-center text-2xl" v-if="categories.length > 0">Our Openings</div>
        <ul>
          <template v-if="categories.length > 0">
            <li v-for="(category, key) in categories" :key="key">
              <div class="text-base text-gray-400 flex items-center mt-8 mb-2">
                <OfficeBuildingIcon class="h-4 w-4 text-gray-600 mr-2" />{{category.name}}</div>
              <div v-for="job in category.jobs" :key="job.id + 'i'"
                class="text-gray-700 mb-4 bg-gray-50 hover:bg-gray-100 px-4 py-4 shadow-md border border-gray-200 shadow-blue-400 rounded-md flex items-center justify-between">
                <div>
                  <div class="text-xl mb-2">{{job.title}}</div>
                  <div class="flex items-center text-sm">
                    <span class="flex items-center mr-4">
                      <LocationMarkerIcon class="h-4 w-4 text-gray-600 mr-1" aria-hidden="true" />
                      {{job.address}}</span>
                    <span class="flex items-center mr-4">
                      <OfficeBuildingIcon class="h-4 w-4 text-gray-600 mr-1" aria-hidden="true" /> {{job.type}}</span>
                    <span class="flex items-center mr-4">
                      <OfficeBuildingIcon class="h-4 w-4 text-gray-600 mr-1" aria-hidden="true" />
                      {{job.category_name}}</span>
                  </div>
                </div>
                <div>
                  <router-link type="button" :to="{ name: 'view-job', params: { id: job.id }}"
                    class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Apply Now
                    <PaperAirplaneIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
                  </router-link>
                </div>
              </div>
            </li>
          </template>
          <div v-else class="text-center my-8 text-gray-500 text-xl">There is no Job opening write now, please come back
            later.

            <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6 justify-center">
              <router-link tag="a" :to="{name: 'Home'}"
                class="inline-flex cursor-pointer items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Go back home </router-link>
            </div>
          </div>
        </ul>
      </div>
    </div>
    <main-footer />
  </div>
</template>

<script>
  import axios from 'axios'
  import mainHeder from '../components/Header.vue'
  import mainFooter from '../components/Footer.vue'
  import {
    LocationMarkerIcon,
    OfficeBuildingIcon,
    PaperAirplaneIcon
  } from '@heroicons/vue/outline'

  export default {
    components: {
      mainHeder,
      mainFooter,
      LocationMarkerIcon,
      OfficeBuildingIcon,
      PaperAirplaneIcon
    },
    data() {
      return {
        categories: [],
      }
    },
    created() {
      this.getJobs()
    },
    methods: {
      getJobs() {
        axios.get('https://careers.technocloud.live/api/jobs').then(res => {
          this.categories = res.data.data
        })
      },
    }
  }
</script>