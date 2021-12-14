<template>
  <div class="projrcts" id="projects">
    <div class="mt-5">
      <div class="max-w-4xl pt-10 mx-auto text-center">
        <h2 class="text-2xl text-left text-black sm:text-4xl">Our Projects</h2>
      </div>
    </div>
    <carousel :wrap-around="true">
      <slide v-for="slide in projects" :key="slide">
        <div class="relative bg-white pt-16 pb-32 overflow-hidden">
          <div class="mt-6">
            <div
              class="
                lg:mx-auto
                lg:max-w-7xl
                lg:px-8
                lg:grid
                lg:grid-cols-2
                lg:grid-flow-col-dense
                lg:gap-24
              "
            >
              <div
                class="
                  px-4
                  max-w-xl
                  mx-auto
                  sm:px-6
                  lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2
                "
              >
                <div>
                  <div class="mt-6">
                    <h2
                      class="
                        text-3xl
                        font-extrabold
                        tracking-tight
                        text-gray-900
                      "
                    >
                      {{ slide.name }}
                    </h2>
                    <p class="mt-4 text-lg text-gray-500">
                      {{ slide.desc }}
                    </p>
                    <div class="mt-6">
                      <a
                        :href="slide.url"
                        class="
                          inline-flex
                          px-4
                          py-2
                          border border-transparent
                          text-base
                          font-medium
                          rounded-md
                          shadow-sm
                          text-white
                          bg-blue-600
                          hover:bg-blue-700
                        "
                      >
                        Start
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-12 sm:mt-16 lg:mt-0">
                <div
                  class="
                    sm:pr-6
                    md:-ml-16
                    lg:px-0 lg:m-0 lg:relative lg:h-full
                  "
                >
                  <img
                    class="
                      w-full
                      rounded-xl
                      shadow-xl
                      ring-1 ring-black ring-opacity-5
                      lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none
                    "
                    :src="slide.img"
                    :alt="slide.name"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>

      <template #addons>
        <pagination />
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import zero from '../assets/images/zero.png'
import deal from '../assets/images/deal.png'
import rojetah from '../assets/images/rojetah.png'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      projects: [
        {
          name: 'ZeroCash',
          desc: 'The money App! No more cash nor wallets',
          url: 'https://play.google.com/store/apps/details?id=v1.zeroCash',
          img: zero,
        },
        {
          name: 'Rojetah',
          desc: 'The first integrated Healthcare App in Egypt',
          url: 'https://play.google.com/store/apps/details?id=com.accuragroup.trater_patient',
          img: rojetah
        },
        {
          name: 'DealMart',
          desc: 'Shop & win prizes that would change your life.',
          url: 'https://play.google.com/store/apps/details?id=deal.mart.dealmart',
          img: deal,
        },
      ]
    }
  }
};
</script>
<style lang="css">
button.carousel__next {
  right: 5rem;
}
button.carousel__prev {
  left: 5rem;
}

.carousel__prev,
.carousel__next {
  background-color: #2563eb;
}
</style>