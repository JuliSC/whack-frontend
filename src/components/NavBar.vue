<template>
  <nav data-cy="nav" class="fixed z-50">
    <div class="flex">
      <a
        class="mr-5 text-4xl text-white cursor-pointer bg-transparent text-shadow -rotate-12"
        href="/"
        @click.prevent="$router.push('/')"
        ><span
          :class="letterColors[i]"
          v-for="(char, i) in 'Whack.GG'"
          :key="char"
          >{{ char }}</span
        ></a
      >
      <a
        class="mx-5 text-2xl text-white transition-all ease-in-out hover:scale-110"
        :class="{ 'text-shadow-white': item.link === $route.path }"
        v-for="item in navItems"
        :key="item.title"
        href=""
        @click.prevent="$router.push(item.link)"
        >{{ item.title }}</a
      >
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface NavItem {
  title: string;
  link: string;
}

const navItems = ref<NavItem[]>([
  { title: "Summoners", link: "/" },
  { title: "Matches", link: "/matches" },
  { title: "Ranks", link: "/ranks" },
]);

const letterColors = ref<string[]>([
  "text-shadow-vp-1",
  "text-shadow-vp-1",
  "text-shadow-vp-2",
  "text-shadow-vp-2",
  "text-shadow-vp-3",
  "text-shadow-vp-3",
  "text-shadow-vp-1",
  "text-shadow-vp-1",
]);
</script>

<style scoped>
.text-shadow-white {
  text-shadow: 0 0 20px white;
}

.text-shadow-vp-1 {
  text-shadow: 0 0 20px #ff3cac;
}

.text-shadow-vp-2 {
  text-shadow: 0 0 20px #784ba0;
}

.text-shadow-vp-3 {
  text-shadow: 0 0 20px #2b86c5;
}

.text-shadow-red {
  text-shadow: 0 0 30px red;
}

.text-shadow-orange {
  text-shadow: 0 0 30px orange;
}

.text-shadow-yellow {
  text-shadow: 0 0 30px yellow;
}

.text-shadow-green {
  text-shadow: 0 0 30px green;
}

.text-shadow-blue {
  text-shadow: 0 0 30px blue;
}

.text-shadow-indigo {
  text-shadow: 0 0 30px indigo;
}

.text-shadow-purple {
  text-shadow: 0 0 30px purple;
}

.text-shadow-pink {
  text-shadow: 0 0 30px pink;
}
</style>
