<template>
    <div class="mx-auto max-w-7xl h-screen flex flex-col justify-center -mt-16">
        <div class="grid grid-cols-12 place-items-center gap-8">
            <div class="col-span-12 md:col-span-6 lg:col-span-4 flex items-center space-x-6">
                <img src="../assets/icons/socials/github.svg" alt="menu" class="h-12 w-12" style="filter: invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);">
                <a href="https://github.com/roelbattad" class="font-montserratAlternates text-xl hover:text-sentences">Follow me on Github.</a>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-4 flex items-center space-x-6">
                <img src="../assets/icons/socials/instagram.svg" alt="menu" class="h-12 w-12" style="filter: invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);">
                <a href="https://instagram.com/engr.rlbttd?igshid=OGQ5ZDc2ODk2ZA==" class="font-montserratAlternates text-xl hover:text-sentences">Follow me on Instagram.</a>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-4 flex items-center space-x-6">
                <img src="../assets/icons/socials/linkedin.svg" alt="menu" class="h-12 w-12" style="filter: invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);">
                <a href="https://www.linkedin.com/in/engr-roel-battad" class="font-montserratAlternates text-xl hover:text-sentences">Let's connect on Linkedin.</a>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-start-3 lg:col-span-4 flex items-center space-x-6">
                <img src="../assets/icons/socials/messenger.svg" alt="menu" class="h-12 w-12" style="filter: invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);">
                <a href="m.me/el.battad" class="font-montserratAlternates text-xl hover:text-sentences">Give me a message.</a>
            </div>
            <div class="col-span-12 md:col-start-4 md:col-span-6 lg:col-span-4 flex items-center space-x-6">
                <img src="../assets/icons/socials/email.svg" alt="menu" class="h-12 w-12" style="filter: invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);">
                <a href="mailto:roel.arellano.battad@gmail.com" class="font-montserratAlternates text-xl hover:text-sentences">A job opportunity? Email me.</a>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
    name: 'ContactsPage',
    setup() {
        onMounted(() => {
        document.title = 'Contacts - Roel Battad';
        })
    }
}
</script>