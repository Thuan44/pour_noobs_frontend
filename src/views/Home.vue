<template>
  <h1>Homepage</h1>
  <form action="http://127.0.0.1:8000/logout" method="POST">
    <button @click="logout">Logout</button>
  </form>
</template>


<script>
import { ref } from "vue";

export default {
  name: "Home",
  components: {},
  setup() {
    return {};
  },
};
</script>