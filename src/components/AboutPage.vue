<template>
<div class="-mt-16 min-h-screen">
    <div class="h-16"></div>
    <div class="max-w-2xl mx-auto my-8 lg:my-16 px-4">
        <div class="relative md:w-2/3 mx-auto">
            <img class="absolute top-0 h-80 w-full object-cover mix-blend-multiply rounded-xl" src="../assets/img/gradient.webp" alt="">
            <img class="top-0 h-80 w-full object-cover rounded-xl" src="../assets/img/mountain.webp" alt="">
        </div>
        <h1 class="text-3xl lg:text-4xl font-bold max-w-2xl font-montserrat mt-4 md:mt-8 text-center">My Web Development Odyssey</h1>
        <p class="text-sentences mt-4 md:mt-8 text-xl">My journey into the world of technology began with aspirations of becoming an electronics engineer. However, fate had different plans for me when I unexpectedly landed a job in the IT industry back in 2017. Despite this deviation from my original path, I embraced the opportunity and embarked on an exciting new adventure. In 2018, driven by an inherent curiosity and a desire to broaden my horizons, I made a bold decision to step out of my comfort zone and explore the field of electronics and communications. It was a risk worth taking as it exposed me to a wealth of knowledge and experiences that would shape my future endeavors.</p>

        <p class="text-sentences mt-4 md:mt-8 text-xl">In 2019, recognizing the increasing prominence of web development, I set my sights on mastering this dynamic domain. However, I quickly realized that self-study alone wouldn't suffice in achieving my goals. Determined to acquire comprehensive skills and expertise, I made the decision to enroll in a web development coding bootcamp. The experience proved transformative, as it provided me with a solid foundation in various programming languages, frameworks, and best practices. Armed with newfound knowledge and fueled by an unyielding passion, I eagerly delved into the realm of software development.</p>

        <p class="text-sentences mt-4 md:mt-8 text-xl">My first foray into the professional world of software development came in the form of a PHP developer role in 2019. It was during this time that I discovered a profound sense of fulfillment in creating web applications for clients. Witnessing the impact of my work and the tangible results it produced filled me with joy and reinforced my belief that I belonged here. In 2021, I took a leap of faith and transitioned to a new company, where I continue to expand my skills, embrace fresh challenges, and contribute to meaningful projects. Looking back on my journey thus far, I am immensely grateful for how far I have come and remain committed to seeking continuous growth and improvement.</p>

        <p class="text-sentences mt-4 md:mt-8 text-xl">Beyond my professional pursuits, I find solace in the comfort of home but also cherish moments of socialization with friends. Currently, my sources of enjoyment include immersing myself in captivating literature, indulging in comedy sitcoms, and mobile gaming. As I envision the future, my aspirations revolve around developing impactful applications, tools, and websites that will greatly benefit the industry I am passionate about in the coming years.</p>
    </div>
</div>
</template>

<script>
import { onMounted } from 'vue';

export default {
    name: 'AboutPage',
    setup() {
        onMounted(() => {
          document.title = 'About - Roel Battad';
        })
    }
}
</script>