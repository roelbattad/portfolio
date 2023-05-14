<template>
  <div class="bg-main-background-under text-highlights font-montserrat">
    <div class="bg-main-background-over mx-auto h-screen relative">
      <NavBar></NavBar>
      <router-view />
    </div>
  </div>
</template>
<script>
import NavBar from './components/NavigationBar.vue'


export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
