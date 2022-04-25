<template>
  <div class="py-12 bg-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          What makes us special?
        </p>
        <!-- <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
        </p> -->
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <div class="py-4 flex items-center">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 leading-6 text-gray-900">{{ feature.name }}</p>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    GlobeAltIcon,
    LightningBoltIcon,
    ScaleIcon
  } from '@heroicons/vue/outline'

  const features = [{
      name: 'We analyze and monitor problems',
      icon: GlobeAltIcon,
    },
    {
      name: 'We design a creative and reliable solutions',
      icon: ScaleIcon,
    },
    {
      name: 'We demonstrate markets through our team of enthusiastic professionals, including product designers, account managers and planners, marketers and developers.',
      icon: LightningBoltIcon,
    },
    {
      name: 'Our team are not just highly-skilled but passionate problem solvers, with a flexible, forward-thinking and outward-looking approach.',
      icon: LightningBoltIcon,
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

<style>

</style>