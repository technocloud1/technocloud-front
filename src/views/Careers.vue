<template>
  <div>
    <main-heder />
    <div class="bg-white">
      <!-- Header -->
      <div class="relative pb-32 bg-gray-800">
        <div class="absolute inset-0">
          <img
            class="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div
            class="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div
          class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
        >
          <h1
            class="
              text-4xl
              font-extrabold
              tracking-tight
              text-white
              md:text-5xl
              lg:text-6xl
            "
          >
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
      <section
        class="
          -mt-32
          max-w-7xl
          mx-auto
          relative
          z-10
          pb-32
          px-4
          sm:px-6
          lg:px-8
        "
        aria-labelledby="contact-heading"
      >
        <h2 class="sr-only" id="contact-heading">Contact us</h2>
        <div
          class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8"
        >
          <div
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
                  text-indigo-700
                  hover:text-indigo-600
                  cursor-pointer
                "
                >
                <router-link :to="{ name: 'view-job', params: { id: link.id }}">
                  Apply Now
                </router-link>
                <span aria-hidden="true"> &rarr;</span></a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <main-footer />
  </div>
</template>

<script>
import axios from 'axios'
import mainHeder from '../components/Header.vue'
import mainFooter from '../components/Footer.vue'
import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/vue/outline'

export default {
  components: {
    mainHeder,
    mainFooter
  },
  data() {
    return {
      jobs: [],
    }
  },
  created() {
    this.getJobs()
  },
  methods: {
    getJobs() {
      axios.get('http://careers.technocloud.live/api/jobs').then(res => {
        console.log(res.data.data)
        this.jobs = res.data.data
      })
    },
  }
}
</script>