<template>
  <div class="bg-white shadow-md rounded-md p-4">
    <table data-cy="matches-table" class="data-table">
      <thead>
        <th>ID</th>
        <th>Game Duration</th>
        <th>Played On</th>
      </thead>
      <tbody>
        <tr
          :data-cy="`match-${match.id}`"
          @click="
            $router.push({
              name: 'match-details',
              params: { matchId: match.id },
            })
          "
          class="cursor-pointer hover:bg-zinc-700"
          v-for="match in matches"
          :key="match.id"
        >
          <td>{{ match.id }}</td>
          <td>{{ toMinuteString(match.duration) }}</td>
          <td>
            {{ new Date(parseInt(match.gameCreation)).toLocaleDateString() }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Match } from "@/@types/GeneralLolTypes";
import axios from "axios";
import { onMounted, ref } from "vue";

const matches = ref<Match[]>([]);

onMounted(async () => {
  axios("http://localhost:3001/matches", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => {
      matches.value = response.data;
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
});

function toMinuteString(duration: number) {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}m ${seconds}s`;
}
</script>

<style scoped></style>
