<template>
  <div class="py-12 bg-blue-500" id="about">
     <div>
        <div class="">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-2xl text-left text-white sm:text-4xl">
              About
            </h2>
            <p class="mt-3 text-xl text-white sm:mt-4">
              Techno Cloud is a holding company for tech Startups that aims to get the maximum of tech solutions for a better world and easier life in different fields.
            </p>
          </div>
        </div>
      </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 class="ml-16 text-lg leading-6 font-medium text-white">{{ feature.name }}</h2>
            </dt>
            <dd class="mt-2 ml-16 text-base text-white">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import {LightBulbIcon, EyeIcon  } from '@heroicons/vue/outline'

const features = [
  {
    name: 'Our mission',
    description:
      'to change the world\'s time consuming processes through easy, smart and reliable tech apps.',
      icon: LightBulbIcon ,
  },
  {
    name: 'Our vision',
    description:
      'to become the house of world changers tech apps',
      icon: EyeIcon,
  },
]

export default {
  setup() {
    return {
      features,
    }
  },
}
</script>