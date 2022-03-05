import { defineStore } from "pinia";
import { ref } from "vue";
import { useLocalStorage } from "@vueuse/core";

export const useUser = defineStore("user", {
  state: () => {
    return {
      user: useLocalStorage(
        "user",
        ref({
          id: "",
          name: "",
          email: "",
          token: "",
          isLoggedIn: false,
        })
      ),
    };
  },

  actions: {
    setUserInfos(id, name, email, token) {
      this.user.id = id;
      this.user.name = name;
      this.user.email = email;
      this.user.token = token;
      this.user.isLoggedIn = true;
    },
    setUserID(id) {
      this.user.id = id;
    },
    setUserName(name) {
      this.user.name = name;
    },
    setUserEmail(email) {
      this.user.email = email;
    },
    setUserToken(token) {
      this.user.token = token;
    },
    logUserIn() {
      this.user.isLoggedIn = true;
    },
    logUserOut() {
      this.user.isLoggedIn = false;
    },
  },
});
