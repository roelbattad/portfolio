<template>
<div class="flex items-center justify-between p-3">
    <p class="font-montserratAlternates font-bold text-4xl tracking-tighter">battad</p>
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
            <li class="py-4">about</li>
            <li class="py-4">projects</li>
            <li class="py-4">contacts</li>
        </ul>
    </div>
</div>
</template>

<script>
import { ref } from 'vue';
import { clickOutSide as vClickOutSide } from '@mahdikhashan/vue3-click-outside'

export default {
    name: 'NavBar',
    directives: {
        vClickOutSide,
    },
    setup() {
        const showHideMenu = ref('hidden');

        function showNav() 
        {
            showHideMenu.value = 'animate__animated animate__fadeInDown';
        }

        function closeNav() 
        {
            showHideMenu.value = 'animate__animated animate__fadeOutUp';
        }

        return {
            showHideMenu,
            showNav,
            closeNav
        }
    }
   
}
</script>