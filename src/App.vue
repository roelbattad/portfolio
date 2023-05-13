<template>
  <div class="bg-main-background-under text-highlights font-montserrat">
    <div class="max-w-screen-xl bg-main-background-over mx-auto h-screen relative">
      <NavBar></NavBar>
      <HomePage />
    </div>
  </div>
</template>
<script>
import HomePage from './components/HomePage.vue'
import NavBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    NavBar
  }
}
</script>
