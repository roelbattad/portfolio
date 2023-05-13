<template>
<div class="flex items-center justify-between p-3">
    <div class="font-montserratAlternates font-bold text-4xl tracking-tighter">battad</div>
    <div class="cursor-pointer" @click="showNav">
        <img src="../assets/icons/menu.svg" alt="menu" class="h-10 w-10" style="filter: invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);">
    </div>
    <div class="absolute">

    </div>
</div>
</template>

<script>
export default {
    name: 'NavBar',
    setup() {
        function showNav() {
            
        }

        return {
            showNav
        }
    }
   
}
</script>