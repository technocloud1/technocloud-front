<template>
  <div>
    <main-header />
    <div class="bg-white">
      <!-- Header -->
      <div class="relative pb-32 bg-gray-800">
        <div class="absolute inset-0">
          <img class="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt="" />
          <div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div class="text-center relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 class="
              text-4xl
              font-extrabold
              tracking-tight
              text-white
              md:text-5xl
              lg:text-6xl
            ">
            {{job.title}}
          </h1>
          <p class="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
            {{job.category_name}}
          </p>
        </div>
      </div>
    </div>
    <div class="relative">
      <nav class="lg:mx-auto lg:max-w-7xl lg:px-8 flex my-8" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div>
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <HomeIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                <span class="sr-only">Home</span>
              </a>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <ChevronRightIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
              <a href="/careers" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Careers</a>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <ChevronRightIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
              <div class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">{{job.title}}</div>
            </div>
          </li>
        </ol>
      </nav>
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 mt-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense lg:gap-24">
        <div class="col-span-2 mb-8">
          <div>
            <div class="my-4">
              <div class="font-semibold mb-4">About <span>{{job.title}}</span> Position</div>
              <div class="text-gray-500" v-html="job.about_job">
              </div>
            </div>
            <div class="my-8">
              <div class="font-semibold text-xl mb-4"><span>{{job.title}}</span> responsibilities are:</div>
              <div class="text-gray-500" v-html="job.job_description"></div>
            </div>
            <div class="my-8">
              <div class="font-semibold text-xl mb-4"><span>{{job.title}}</span> requirements are:</div>
              <div class="text-gray-500" v-html="job.job_requirements"></div>
            </div>
          </div>
          <router-link type="button" :to="{ name: 'apply', params: {id: job.id}}"
            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Apply To Position
            <MailIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
          </router-link>
        </div>
        <div>
          <router-link type="button" :to="{ name: 'apply', params: {id: job.id}}"
            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Apply To Position
            <MailIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
          </router-link>
          <div class="py-8">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-4">
                <dt class="text-sm font-medium text-gray-500">Career Level</dt>
                <dd class="mt-1 text-sm text-gray-900">{{job.career_level}}</dd>
              </div>
              <div class="sm:col-span-4">
                <dt class="text-sm font-medium text-gray-500">Experience Range</dt>
                <dd class="mt-1 text-sm text-gray-900">{{job.min_exp_y}} to {{job.max_exp_y}} years</dd>
              </div>
              <div class="sm:col-span-4">
                <dt class="text-sm font-medium text-gray-500">Salary Range</dt>
                <dd class="mt-1 text-sm text-gray-900" v-if="hide_salary">${{job.salary_min}} - ${{job.salary_max}}</dd>
                <dd class="mt-1 text-sm text-gray-900" v-else>Confidential</dd>
              </div>
              <div class="sm:col-span-4">
                <dt class="text-sm font-medium text-gray-500">Education Level</dt>
                <dd class="mt-1 text-sm text-gray-900">{{job.education_level}}</dd>
              </div>
              <div class="sm:col-span-4">
                <dt class="text-sm font-medium text-gray-500">Gender</dt>
                <dd class="mt-1 text-sm text-gray-900">{{job.gender}}</dd>
              </div>
              <div class="sm:col-span-4">
                <dt class="text-sm font-medium text-gray-500">Address</dt>
                <dd class="mt-1 text-sm text-gray-900">{{job.address}}</dd>
              </div>
              <div class="sm:col-span-4">
                <dt class="text-sm font-medium text-gray-500">Info Email</dt>
                <dd class="mt-1 text-sm text-gray-900">{{job.recipient_email}}</dd>
              </div>
            </dl>
          </div>
          <div>
            <div><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13823.395580139984!2d31.3413929!3d29.9837723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8fdd5df53b4084d4!2sTechnocloud!5e0!3m2!1sen!2seg!4v1644159421071!5m2!1sen!2seg" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>
          </div>
        </div>
      </div>
    </div>
    <main-footer />
  </div>
</template>

<script>
  import axios from 'axios'
  import mainHeader from '../components/Header.vue'
  import mainFooter from '../components/Footer.vue'

  import {
    MailIcon
  } from '@heroicons/vue/outline'
  import {
    ChevronRightIcon,
    HomeIcon
  } from '@heroicons/vue/solid'

  export default {
    props: ['id'],
    components: {
      mainHeader,
      ChevronRightIcon,
      HomeIcon,
      MailIcon,
      mainFooter
    },
    data() {
      return {
        job: {},
      }
    },
    mounted() {
      this.getJob()
    },
    methods: {
      async getJob() {
        try {
          const {
            data
          } = await axios.get(`http://careers.technocloud.live/api/jobs/${this.id}`)
          this.job = data.data

        } catch (error) {
          console.log(error);
        }
      },
    }
  }
</script>

<style>

</style>