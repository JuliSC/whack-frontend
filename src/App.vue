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
import { onMounted } from "vue";
import { useUserStore } from "./stores/user";

const userStore = useUserStore();

onMounted(() => {
  userStore.autoLogin();
});
</script>

<style scoped></style>
