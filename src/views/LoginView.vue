<template>
  <div class="bg-white shadow-md rounded-md p-4 mb-10">
    <form @submit.prevent="login()">
      <div class="mb-4">
        <label class="block font-bold mb-2 text-gray-700" for="name"
          >Username</label
        >
        <input
          data-cy="username-input"
          class="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="filter"
          v-model="username"
          type="text"
        />
      </div>
      <div class="mb-4">
        <label class="block font-bold mb-2 text-gray-700" for="name"
          >Password</label
        >
        <input
          data-cy="password-input"
          class="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="filter"
          v-model="password"
          type="password"
        />
      </div>

      <button
        data-cy="login-button"
        class="w-full rounded bg-blue-500 text-white p-2 mt-2 transition-all ease-in-out active:bg-blue-200"
      >
        Log in
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

// Stores
const userStore = useUserStore();

// Credentials
const username = ref<string>("");
const password = ref<string>("");

function login() {
  userStore.login(username.value, password.value);
}
</script>

<style scoped></style>
