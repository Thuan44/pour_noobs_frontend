<template>
  <TheNavbar></TheNavbar>
  <router-view></router-view>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue"
import { useUser } from '@/store/user.js'
import getUserCart from '@/composables/getUserCart'

export default {
  components: { TheNavbar },
  setup() {
    const store = useUser()

    if (store.user.cart) {
      getUserCart()
    }
    return {}
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap");

@font-face {
  font-family: "ProximaNovaLight";
  src: url("@/assets/fonts/Proxima/ProximaNova-Light.otf");
  font-weight: lighter;
}
@font-face {
  font-family: "ProximaNova";
  src: url("@/assets/fonts/Proxima/ProximaNova-Regular.otf");
  font-weight: normal;
}
@font-face {
  font-family: "ProximaNova";
  src: url("@/assets/fonts/Proxima/ProximaNova-Bold.otf");
  font-weight: bold;
}

#app {
  font-family: "ProximaNova", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
