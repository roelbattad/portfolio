<template>
    <div class="p-3 sm:px-12">
        <div class="max-w-7xl mx-auto h-screen">
            Contacts Page
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
    name: 'ContactsPage',
    setup() {
        onMounted(() => {
        document.title = 'Contacts - Roel Battad';
        })
    }
}
</script>