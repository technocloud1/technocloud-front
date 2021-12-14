<template>
  <div class="bg-blue-600 relative" id="about">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt="" />
        <div class="absolute inset-0 bg-blue-800 mix-blend-multiply" aria-hidden="true" />
      </div>
    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div class="relative">
        <div>
          <span class="h-12 w-12 rounded-md flex items-center justify-center bg-white">
            <LightBulbIcon class="h-6 w-6 text-blue-600" aria-hidden="true" />
          </span>
        </div>
        <p class="mt-2 text-3xl font-extrabold text-gray-100">About</p>
        <p class="mt-4 text-lg text-gray-200">Techno Cloud is a holding company for tech Startups that aims to get the
          maximum of tech solutions for a better world and easier life in different fields.</p>
      </div>
      <div class="mt-12 lg:mt-0 lg:col-span-2">
        <dl
          class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:grid-rows-2 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <component :is="feature.icon" class="absolute h-6 w-6 text-white" aria-hidden="true" />
              <p class="ml-9 text-lg leading-6 font-medium text-gray-100">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-9 text-base text-gray-200">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    LightBulbIcon,
    EyeIcon
  } from '@heroicons/vue/outline'
  import {
    InboxIcon,
    SparklesIcon
  } from '@heroicons/vue/outline'


  const features = [{
      name: 'Our mission',
      description: 'to change the world\'s time consuming processes through easy, smart and reliable tech apps.',
      icon: LightBulbIcon,
    },
    {
      name: 'Our vision',
      description: 'to become the house of world changers tech apps',
      icon: EyeIcon,
    },
  ]

  export default {
    components: {
      InboxIcon,
      SparklesIcon,
      LightBulbIcon,
      EyeIcon,
    },
    setup() {
      return {
        features,
      }
    },
  }
</script>