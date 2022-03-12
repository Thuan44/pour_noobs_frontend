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
          isAdmin: false,
          isLoggedIn: false,
          cartID: null,
          cart: null,
          cartCourseNumber: null,
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
    setAsAdmin() {
      this.user.isAdmin = true;
    },
    logUserIn() {
      this.user.isLoggedIn = true;
    },
    logUserOut() {
      this.user.isLoggedIn = false;
    },
    setCartID(cartID) {
      this.user.cartID = cartID;
    },
    setCart(cart) {
      this.user.cart = cart;
    },
    setCartCourseNumber(cartCourseNumber) {
      this.user.cartCourseNumber = cartCourseNumber;
    },
  },
});
