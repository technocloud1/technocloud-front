<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <!--
    This example requires updating your template:

    ```
    <html class="h-full">
    <body class="h-full">
    ```
  -->
    <div class="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div class="max-w-max mx-auto">
            <main class="sm:flex">
                <p class="text-4xl font-extrabold text-blue-600 sm:text-5xl">
                    <BadgeCheckIcon class="h-20 w-20" />
                </p>

                {{applyedJob}}
                <div class="sm:ml-6">
                    <div class="sm:border-l sm:border-gray-200 sm:pl-6">
                        <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Thank you!</h1>
                        <p class="mt-1 text-base text-gray-500">Your information has been successfully submited!</p>
                    </div>
                    <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                        <router-link tag="a" :to="{name: 'Home'}"
                            class="inline-flex cursor-pointer items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Go back home </router-link>
                        <a @click="$router.go(-1)"
                            class="inline-flex cursor-pointer items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Submit New Application</a>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    import {
        BadgeCheckIcon
    } from '@heroicons/vue/solid'
    export default {
        props: ['applyJob'],
        components: {
            BadgeCheckIcon
        },
        created() {
            const data = this.applyJob ? JSON.parse(this.applyJob) : false
            if (!data) {
                return this.$router.push({name: 'Careers'})
            } 
        },
    }
</script>