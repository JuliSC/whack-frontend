<template>
  <div>
    <NavBar></NavBar>
    <div
      class="relative min-h-screen flex flex-col justify-center items-center background"
    >
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<style scoped></style>
