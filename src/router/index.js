import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Register from "@/views/auth/Register.vue";
import Login from "@/views/auth/Login.vue";
import SingleCourse from "@/views/SingleCourse.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/courses/:id",
    name: "SingleCourse",
    component: SingleCourse,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
