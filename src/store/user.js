import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    id: "",
    name: "Thuan",
    email: "",
    isLoggedIn: false,
  });

  const setUserInfos = (name, email) => {
    user.value.name = name;
    user.value.email = email;
    user.value.isLoggedIn = true;
  };

  const setUserName = (name) => {
    user.value.name = name;
  };
  const setUserEmail = (email) => {
    user.value.email = email;
  };
  const logUserIn = () => {
    user.value.isLoggedIn = true;
  };
  const logUserOut = () => {
    user.value.isLoggedIn = false;
  };

  return {
    user,
    setUserInfos,
    setUserName,
    setUserEmail,
    logUserIn,
    logUserOut,
  };
});
