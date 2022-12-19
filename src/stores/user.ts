import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

const userDefaults = {
  username: "",
  isAuthenticated: false,
};

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    username: userDefaults.username,
    isAuthenticated: userDefaults.isAuthenticated,
  }),
  actions: {
    login(username: string, password: string) {
      console.log(username, password);

      axios("http://localhost:3001/auth/login", {
        method: "POST",
        data: {
          summonerName: username,
          password,
        },
      }).then((response) => {
        this.username = response.data.user.summonerName;
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("user", response.data.user.summonerName);

        this.isAuthenticated = true;
        router.push("/");
      });
    },
    logout() {
      this.username = userDefaults.username;
      this.isAuthenticated = userDefaults.isAuthenticated;

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      router.push("/");
    },
  },
});
