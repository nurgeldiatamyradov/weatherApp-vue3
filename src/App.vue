<template>
  <div
    class="flex flex-col min-h-screen font-Roboto bg-weather-primary"
  >
    <SiteNavigation />
    <RouterView class="flex-1" v-slot="{ Component }">
      <Transition name="page">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup>
  import { RouterView } from "vue-router";
  import SiteNavigatin from "./components/SiteNavigatin.vue";

</script>

<style lang="scss" scoped>

</style>