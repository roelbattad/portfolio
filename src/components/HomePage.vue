<template>
<div class="px-4 md:px-12">
    <div class="max-w-7xl mx-auto font-montserrat h-screen">
        <!-- Homepage Title Start -->
        <div class="text-start">
            <p class="text-4xl tracking-tighter font-bold mt-8 w-3/4">Full stack developer and electronics engineer</p>
            <p class="mt-8 text-sentences text-lg tracking-tight font-medium">
                Hi! I'm a full stack developer and electronics engineer based in the Philippines. Most of my work are related to building and providing the best scalable solutions for e-commerce websites and applications.
            </p>
        </div>
        <!-- Homepage Title End-->
        <div class="flex flex-col items-start space-y-6 mt-8 text-sm">
            <div class="flex items-center space-x-2">
                <img src="../assets/icons/socials/github.svg" alt="menu" class="h-8 w-8" style="filter: invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);">
                <p class="font-montserratAlternates">Follow me on Github.</p>
            </div>
            <div class="flex items-center space-x-2">
                <img src="../assets/icons/socials/instagram.svg" alt="menu" class="h-8 w-8" style="filter: invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);">
                <p class="font-montserratAlternates">Follow me on Instagram.</p>
            </div>
            <div class="flex items-center space-x-2">
                <img src="../assets/icons/socials/linkedin.svg" alt="menu" class="h-8 w-8" style="filter: invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);">
                <p class="font-montserratAlternates">Follow me on Linkedin.</p>
            </div>
        </div>
  </div>
</div>
</template>
<script>
import { onMounted } from 'vue';

export default {
  name: 'HomePage',
  setup() {
    onMounted(() => {
      document.title = 'Home - Roel Battad';
    })
  }
}
</script>