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
                        Apply Now
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
                            <a href="/careers"
                                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Careers</a>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <ChevronRightIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                            <div class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">{{job.title}}</div>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <ChevronRightIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                            <div class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Job Application
                            </div>
                        </div>
                    </li>
                </ol>
            </nav>
            <div class="lg:mx-auto lg:max-w-7xl lg:px-8 mt-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense lg:gap-24">
                <div class="col-span-2 mb-8">
                    <div>
                        <form class="space-y-8 divide-y divide-gray-200" @submit.prevent>
                            <div class="space-y-8 divide-y divide-gray-200">
                                <div class="pt-8">
                                    <div>
                                        <h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information
                                        </h3>
                                        <p class="mt-1 text-sm text-gray-500">Use a permanent address where you can
                                            receive mail.</p>
                                    </div>
                                    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div class="sm:col-span-3">
                                            <label for="name" class="block text-sm font-medium text-gray-700">
                                                Full Name </label>
                                            <div class="mt-1">
                                                <input type="text" v-model="form.name" name="name" id="name"
                                                    autocomplete="given-name"
                                                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                <span class="text-xs text-red-500" v-if="serverErrors.name">
                                                    <template v-for="(error, key) in serverErrors.name"
                                                        :key="key + 'name'">
                                                        <div>{{error}}</div>
                                                    </template>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="sm:col-span-3">
                                            <label for="email" class="block text-sm font-medium text-gray-700"> Email
                                                address </label>
                                            <div class="mt-1">
                                                <input id="email" v-model="form.email" name="email" type="email"
                                                    autocomplete="email"
                                                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                <span class="text-xs text-red-500" v-if="serverErrors.email">
                                                    <template v-for="(error, key) in serverErrors.email"
                                                        :key="key + 'email'">
                                                        <div>{{error}}</div>
                                                    </template>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="sm:col-span-3">
                                            <label for="phone" class="block text-sm font-medium text-gray-700">
                                                Phone Number </label>
                                            <div class="mt-1">
                                                <input type="text" name="phone" v-model="form.phone" id="phone"
                                                    autocomplete="given-name"
                                                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                <span class="text-xs text-red-500" v-if="serverErrors.phone">
                                                    <template v-for="(error, key) in serverErrors.phone"
                                                        :key="key + 'phone'">
                                                        <div>{{error}}</div>
                                                    </template>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="sm:col-span-3">
                                            <label for="address" class="block text-sm font-medium text-gray-700">
                                                Address </label>
                                            <div class="mt-1">
                                                <input type="text" name="address" v-model="form.address" id="address"
                                                    autocomplete="address"
                                                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                <span class="text-xs text-red-500" v-if="serverErrors.address">
                                                    <template v-for="(error, key) in serverErrors.address"
                                                        :key="key + 'address'">
                                                        <div>{{error}}</div>
                                                    </template>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="sm:col-span-3">
                                            <label for="city" class="block text-sm font-medium text-gray-700"> City
                                            </label>
                                            <div class="mt-1">
                                                <input type="text" name="city" v-model="form.city" id="city"
                                                    autocomplete="address-level2"
                                                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                <span class="text-xs text-red-500" v-if="serverErrors.city">
                                                    <template v-for="(error, key) in serverErrors.city"
                                                        :key="key + 'city'">
                                                        <div>{{error}}</div>
                                                    </template>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mt-8 mb-2">
                                    CV
                                </label>
                                <div class="mt-1 flex justify-center cursor-pointer px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                                    @click="selectNewPhoto">
                                    <div class="space-y-1 text-center">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                            viewBox="0 0 48 48" aria-hidden="true">
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="flex text-sm text-gray-600">
                                            <label for="file-upload"
                                                class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span>Upload your CV</span>
                                                <input ref="file" id="file-upload" name="file" type="file"
                                                    class="sr-only">
                                            </label>
                                            <p class="pl-1">or drag and drop</p>
                                        </div>
                                        <p class="text-xs text-gray-500">
                                            PDF, Word
                                        </p>
                                    </div>
                                </div>
                                <span class="text-xs text-red-500" v-if="serverErrors.file">
                                    <template v-for="(error, key) in serverErrors.file" :key="key + 'file'">
                                        <div>{{error}}</div>
                                    </template>
                                </span>
                            </div>

                            <div class="pt-5">
                                <div class="flex justify-end">
                                    <button type="button"
                                        class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
                                    <button type="submit" @click="submit"
                                        class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <div>
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
                                <dd class="mt-1 text-sm text-gray-900" v-if="hide_salary">${{job.salary_min}} -
                                    ${{job.salary_max}}</dd>
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
                        <div><iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13823.395580139984!2d31.3413929!3d29.9837723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8fdd5df53b4084d4!2sTechnocloud!5e0!3m2!1sen!2seg!4v1644159421071!5m2!1sen!2seg"
                                width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
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
                form: {
                    name: '',
                    phone: '',
                    email: '',
                    address: '',
                    city: '',
                    file: '',
                },
                serverErrors: {}
            }
        },
        mounted() {
            this.getJob()
        },
        methods: {
            selectNewPhoto() {
                // this.$refs.file.click();
            },
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
            async submit() {
                const formData = new FormData();
                this.form.file = this.$refs.file.files[0];
                console.log(this.$refs.file.files[0]);
                formData.append('name', this.form.name)
                formData.append('email', this.form.email)
                formData.append('phone', this.form.phone)
                formData.append('address', this.form.address)
                formData.append('city', this.form.city)
                formData.append('file', this.form.file)
                try {
                    const config = {
                        headers: {
                            'content-type': 'multipart/form-data'
                        }
                    }
                    const {
                        data
                    } = await axios.post(`http://careers.technocloud.live/api/jobs/${this.id}/apply`, formData,
                        config)
                    this.serverErrors = {}
                    this.$router.push({
                        name: 'appled-job',
                        params: {
                            applyJob: JSON.stringify(data.data)
                        }
                    })

                } catch (error) {
                    this.serverErrors = error.response.data.errors
                    console.log(error);
                }
            },
        }
    }
</script>

<style>

</style>