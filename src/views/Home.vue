<template>
  <div class="bg-white">
    <mian-header />
    <main>
      <hearo-banner />
      <facts />
      <about />
      <projects />
      <special />
      <contact />
      <main-footer />
      <!-- More main page content here... -->
    </main>
  </div>
</template>

<script>
import mianHeader from "../components/Header.vue"
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import about from '../components/About.vue'
import Projects from '../components/Projects.vue'
import Special from '../components/Special.vue'
import Contact from '../components/Contact.vue'
import MainFooter from '../components/Footer.vue'
import HearoBanner from '../components/HearoBanner.vue'
import Facts from '../components/Facts.vue'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Projects', href: '#' },
]

export default {
  name: 'Home',
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
    mianHeader,
    about,
    Projects,
    Special,
    Contact,
    MainFooter,
    HearoBanner,
    Facts,
  },
  setup() {
    return {
      navigation,
    }
  },
}
</script>