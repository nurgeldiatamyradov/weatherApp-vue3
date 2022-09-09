<template>
  <div
    class="flex flex-col min-h-screen font-Roboto bg-weather-primary"
  >
    <SiteNavigation />
    <RouterView>
      
    </RouterView>
  </div>
</template>

<script setup>
  import { RouterView } from "vue-router";
  import SiteNavigation from "./components/SiteNavigatin.vue";

</script>

<style lang="scss" scoped>

</style>