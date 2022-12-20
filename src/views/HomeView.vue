<template>
  <main>
    <div class="bg-white shadow-md rounded-md p-4 mb-5">
      <form>
        <label class="block font-bold mb-2 text-gray-700" for="name"
          >Filter summoners</label
        >
        <input
          class="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="filter"
          v-model="filter"
          type="text"
        />
      </form>
    </div>

    <div class="bg-white shadow-md rounded-md p-4">
      <table data-cy="summoners-table" class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Summoner Name</th>
            <th>Level</th>
            <th>Rank</th>
            <th>LP</th>
            <th>Region ID</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="summoner in filteredSummoners"
            :key="summoner.summonerName"
          >
            <td>{{ summoner.id }}</td>
            <td :data-cy="summoner.summonerName">
              {{ summoner.summonerName }}
            </td>
            <td>{{ summoner.level }}</td>
            <td>
              {{ summoner.rank.tier.name }} {{ summoner.rank.division.name }}
            </td>
            <td>{{ summoner.rank.lp }}</td>
            <td>{{ summoner.region.name }}</td>
          </tr>
        </tbody>
        <tfoot>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tfoot>
      </table>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Summoner } from "@/@types/GeneralLolTypes";
import axios from "axios";
import { computed, onMounted, ref } from "vue";

const summoners = ref<Summoner[]>([]);
const filter = ref<string>("");

const filteredSummoners = computed(() => {
  return summoners.value.filter((summoner) => {
    return summoner.summonerName
      .toLowerCase()
      .includes(filter.value.toLowerCase());
  });
});

onMounted(async () => {
  axios("http://localhost:3001/sql/summoner", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      summoners.value = res.data;
    })
    .catch((err) => alert(err.response.data.message));
});
</script>

<style scoped></style>
