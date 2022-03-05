import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    id: "",
    name: "Thuan",
    email: "",
    token: "",
    isLoggedIn: false,
  });

  const setUserInfos = (id, name, email, token) => {
    user.value.id = id;
    user.value.name = name;
    user.value.email = email;
    user.value.token = token;
    user.value.isLoggedIn = true;
  };

  const setUserName = (name) => {
    user.value.name = name;
  };
  const setUserEmail = (email) => {
    user.value.email = email;
  };
  const setUserToken = (token) => {
    user.value.token = token;
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
    setUserToken,
    logUserIn,
    logUserOut,
  };
});
