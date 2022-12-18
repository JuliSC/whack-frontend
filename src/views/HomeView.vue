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
    <table class="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Summoner Name</th>
          <th>Icon</th>
          <th>Level</th>
          <th>Rank ID</th>
          <th>Region ID</th>
          <th>Admin</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="summoner in filteredSummoners" :key="summoner.summonerName">
          <td>{{ summoner.id }}</td>
          <td :data-cy="summoner.summonerName">{{ summoner.summonerName }}</td>
          <td>{{ summoner.icon }}</td>
          <td>{{ summoner.level }}</td>
          <td>{{ summoner.rankId }}</td>
          <td>{{ summoner.regionId }}</td>
          <td>{{ summoner.isAdmin }}</td>
        </tr>
      </tbody>
      <tfoot>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tfoot>
    </table>
  </main>
</template>

<script setup lang="ts">
import axios from "axios";
import { computed, onMounted, ref } from "vue";

interface Summoner {
  id: number;
  summonerName: string;
  icon: number;
  level: number;
  rankId: number;
  regionId: number;
  isAdmin: boolean;
}

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
    },
  })
    .then((res) => (summoners.value = res.data))
    .catch((err) => alert("Oops! Something went wrong!"));

  axios("http://localhost:3001/sql/summoner", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});
</script>

<style scoped></style>
