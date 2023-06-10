<template>
<div class="h-16 sticky top-0 z-50">
    <div class="bg-main-background-over bg-opacity-90 flex items-center justify-between p-3 md:hidden">
        <p class="font-montserratAlternates font-bold text-4xl tracking-tighter"><router-link to="/portfolio/">battad</router-link></p>
        <div class="cursor-pointer" @click.stop="showNav">
            <img src="../assets/icons/menu.svg" alt="menu" class="h-10 w-10" style="filter: invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);">
        </div>
        <div class="absolute w-full bg-mobile-menu bg-opacity-90 text-white left-0 top-0 p-3" :class="showHideMenu" v-click-outside="closeNav">
            <div class="flex items-center justify-between">
                <p class="font-montserrat font-bold text-2xl">menu</p>
                <div class="cursor-pointer" @click="closeNav">
                    <img src="../assets/icons/close.svg" alt="menu" class="h-10 w-10" style="filter: invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);">
                </div>
            </div>
            <ul class="text-3xl text-center">
                <li class="py-4" @click="closeNav"><router-link to="/portfolio/about" active-class="font-bold">about</router-link></li>
                <li class="py-4" @click="closeNav"><router-link to="/portfolio/projects" active-class="font-bold">projects</router-link></li>
                <li class="py-4" @click="closeNav"><router-link to="/portfolio/job-history" active-class="font-bold">job history</router-link></li>
                <li class="py-4" @click="closeNav"><router-link to="/portfolio/contacts" active-class="font-bold">contacts</router-link></li>
            </ul>
        </div>
    </div>
    <div class="bg-main-background-over bg-opacity-90 px-12">
        <div class="mx-auto max-w-7xl hidden md:flex justify-between py-3 items-center">
            <p class="font-montserratAlternates font-bold text-4xl tracking-tighter"><router-link to="/portfolio/">roel battad</router-link></p>
            <div>
                <ul class="text-xl flex space-x-6 font-medium">
                    <li><router-link to="/portfolio/about" active-class="font-bold">about</router-link></li>
                    <li><router-link to="/portfolio/projects" active-class="font-bold">projects</router-link></li>
                    <li><router-link to="/portfolio/job-history" active-class="font-bold">job history</router-link></li>
                    <li><router-link to="/portfolio/contacts" active-class="font-bold">contacts</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router'

export default {
    name: 'NavBar',
    directives: {
        "click-outside": {
            updated: function(el, binding) {
                // Define ourClickEventHandler
                const ourClickEventHandler = event => {
                if (!el.contains(event.target) && el !== event.target) {
                    // as we are attaching an click event listern to the document (below)
                    // ensure the events target is outside the element or a child of it
                    binding.value(event); // before binding it
                }
                };
                // attached the handler to the element so we can remove it later easily
                el.__vueClickEventHandler__ = ourClickEventHandler;

                // attaching ourClickEventHandler to a listener on the document here
                document.addEventListener("click", ourClickEventHandler);
            },
            unmounted: function(el) {
                // Remove Event Listener
                document.removeEventListener("click", el.__vueClickEventHandler__);
            }
        }
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
            showHideMenu.value = 'hidden';
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