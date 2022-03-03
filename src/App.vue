<template>
  <NavbarComponent></NavbarComponent>
  <router-view></router-view>
</template>

<script>
import Navbar from "@/components/NavbarComponent.vue"
import NavbarComponent from "./components/NavbarComponent.vue"

export default {
  components: { Navbar, NavbarComponent },
  setup() {

    return {}
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
