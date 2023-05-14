<template>
    <div class="p-3 sm:px-12">
        <div class="max-w-7xl mx-auto h-screen">
            Job History Page
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
    name: 'JobHistoryPage',
    setup() {
        onMounted(() => {
        document.title = 'Job History - Roel Battad';
        })
    }
}
</script>