<template>
  <div class="bg-white shadow-md rounded-md p-4">
    <form>
      <label class="block font-bold mb-2 text-gray-700" for="name"
        >Summoner</label
      >
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
      />
    </form>
    <table class="data-table">
      <thead>
        <th>ID</th>
        <th>Game Duration</th>
        <th>Played On</th>
      </thead>
      <tbody>
        <tr v-for="match in matches" :key="match.id">
          <td>{{ match.id }}</td>
          <td>{{ match.duration }}</td>
          <td>
            {{ new Date(parseInt(match.gameCreation)).toLocaleDateString() }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";

interface Match {
  id: number;
  duration: number;
  gameCreation: string;
}

const matches = ref<Match[]>([]);

onMounted(async () => {
  axios("http://localhost:3001/matches", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      matches.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<style scoped></style>
