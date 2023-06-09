<template>
<div class="bg-menu-background px-4 md:px-12 border-sentences border-t-2">
    <div class="mx-auto max-w-7xl py-4 items-center">
        <div>
            <ul class="text-lg flex justify-start space-x-2 text-sm">
                <li><router-link to="/portfolio" active-class="font-bold">home</router-link></li>
                <li><router-link to="/portfolio/about" active-class="font-bold">about</router-link></li>
                <li><router-link to="/portfolio/projects" active-class="font-bold">projects</router-link></li>
                <li><router-link to="/portfolio/job-history" active-class="font-bold">job history</router-link></li>
                <li><router-link to="/portfolio/contacts" active-class="font-bold">contacts</router-link></li>
            </ul>
        </div>
        <div class="mt-4 text-left text-xs text-sentences">
            © 2023 Roel Battad. All rights reserved.
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'FooterSection'
}
</script>