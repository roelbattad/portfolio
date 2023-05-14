<template>
  <div class="bg-main-background-under text-highlights font-montserrat">
    <div class="bg-main-background-over mx-auto relative">
      <NavBar></NavBar>
      <router-view />
      <FooterSection></FooterSection>
    </div>
  </div>
</template>
<script>
import NavBar from './components/NavigationBar.vue'
import FooterSection from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterSection
  }
}
</script>
