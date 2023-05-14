<template>
<div class="p-3 sm:px-12">
    <div class="max-w-7xl mx-auto">
        Home page
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