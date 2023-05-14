<template>
<div class="p-3 sm:px-12">
  <div class="max-w-7xl mx-auto h-screen">
    About me
  </div>
</div>
</template>

<script>
import { onMounted } from 'vue';

export default {
    name: 'AboutPage',
    setup() {
        onMounted(() => {
          document.title = 'About - Roel Battad';
        })
    }
}
</script>