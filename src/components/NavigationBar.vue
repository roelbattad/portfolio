<template>
<div>
    <div class="flex items-center justify-between p-3 md:hidden">
        <p class="font-montserratAlternates font-bold text-4xl tracking-tighter"><router-link to="/">battad</router-link></p>
        <div class="cursor-pointer" @click.stop="showNav">
            <img src="../assets/icons/menu.svg" alt="menu" class="h-10 w-10" style="filter: invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);">
        </div>
        <div class="absolute w-full bg-mobile-menu bg-opacity-90 text-white left-0 top-0 p-3" :class="showHideMenu" v-vClickOutSide="closeNav">
            <div class="flex items-center justify-between">
                <p class="font-montserrat font-bold text-2xl">menu</p>
                <div class="cursor-pointer" @click="closeNav">
                    <img src="../assets/icons/close.svg" alt="menu" class="h-10 w-10" style="filter: invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);">
                </div>
            </div>
            <ul class="text-3xl text-center">
                <li class="py-4" @click="closeNav"><router-link to="/about">about</router-link></li>
                <li class="py-4" @click="closeNav"><router-link to="/projects">projects</router-link></li>
                <li class="py-4" @click="closeNav"><router-link to="/job-history">job history</router-link></li>
                <li class="py-4" @click="closeNav"><router-link to="/contacts">contacts</router-link></li>
            </ul>
        </div>
    </div>
    <div class="bg-menu-background px-12">
        <div class="mx-auto max-w-7xl hidden md:flex justify-between py-3 items-center">
            <p class="font-montserratAlternates font-bold text-4xl tracking-tighter"><router-link to="/">roel battad</router-link></p>
            <div>
                <ul class="text-xl flex space-x-6 font-medium">
                    <li><router-link to="/about">about</router-link></li>
                    <li><router-link to="/projects">projects</router-link></li>
                    <li><router-link to="/job-history">job history</router-link></li>
                    <li><router-link to="/contacts">contacts</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { clickOutSide as vClickOutSide } from '@mahdikhashan/vue3-click-outside'
import { useRouter } from 'vue-router'

export default {
    name: 'NavBar',
    directives: {
        vClickOutSide,
    },
    setup() {
        const showHideMenu = ref('hidden');
        const router = useRouter();

        function handleResize()
        {
            showHideMenu.value = 'hidden';
        }

        function showNav() 
        {
            showHideMenu.value = 'animate__animated animate__fadeInDown';
        }

        function closeNav() 
        {
            if (showHideMenu.value !== 'animate__animated animate__fadeOutUp') {
                showHideMenu.value = 'animate__animated animate__fadeOutUp';
            }
        }

        onMounted(() => {
            window.addEventListener('resize', handleResize)
        }) 

        onUnmounted(() => {
            window.removeEventListener('resize', handleResize)
        })

        return {
            showHideMenu,
            showNav,
            closeNav,
            router
        }
    }
}
</script>