<template>
    <div class="p-3 sm:px-12">
        <div class="max-w-7xl mx-auto">
            Project Page
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
    name: 'ProjectsPage',
    setup() {
        onMounted(() => {
        document.title = 'Projects - Roel Battad';
        })
    }
}
</script>