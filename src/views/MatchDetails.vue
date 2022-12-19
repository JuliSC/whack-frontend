<template>
  <div
    v-for="(team, i) in match?.teams"
    :key="`${team.id}-${team.matchWon}`"
    class="bg-white shadow-md rounded-md p-4 mb-10"
  >
    <h1 class="text-xl text-zinc-500">Team {{ i + 1 }}</h1>
    <span
      :class="{
        'text-green-500': team.matchWon,
        'text-red-500': !team.matchWon,
      }"
      >{{ team.matchWon ? "Won" : "Lost" }}</span
    >
    <table data-cy="participants-table" class="data-table">
      <thead>
        <tr>
          <th>Summoner</th>
          <th>Champion</th>
          <th>Position</th>
          <th>K/D/A</th>
          <th>Double Kills</th>
          <th>Triple Kills</th>
          <th>Quadra Kills</th>
          <th>Penta Kills</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :data-cy="participant.summoner.summonerName"
          v-for="participant in team.participants"
          :key="`part-${participant.id}`"
        >
          <td>{{ participant.summoner.summonerName }}</td>
          <td>{{ participant.champion.name }}</td>
          <td>{{ participant.position.name }}</td>
          <td>
            {{ participant.kills }}/{{ participant.deaths }}/{{
              participant.assists
            }}
          </td>

          <td>{{ participant.doubleKills }}</td>
          <td>{{ participant.tripleKills }}</td>
          <td>{{ participant.quadraKills }}</td>
          <td>{{ participant.pentaKills }}</td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Match } from "@/@types/GeneralLolTypes";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  matchId: {
    type: Number,
    required: true,
  },
});

const match = ref<Match>();

onMounted(() => {
  const route = useRoute();
  axios(`http://localhost:3001/matches/teams/${props.matchId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    console.log(response.data);

    match.value = response.data;
  });
});
</script>

<style scoped></style>
