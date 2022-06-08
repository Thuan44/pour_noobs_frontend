import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Players from "@/views/Players.vue";
import Sponsors from "@/views/Sponsors.vue";
import Community from "@/views/Community.vue";
import Blog from "@/views/Blog.vue";
import Contact from "@/views/Contact.vue";
import Register from "@/views/auth/Register.vue";
import Login from "@/views/auth/Login.vue";
import SingleCourse from "@/views/SingleCourse.vue";
import Cart from "@/views/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/players",
    name: "Players",
    component: Players,
  },
  {
    path: "/sponsors",
    name: "Sponsors",
    component: Sponsors,
  },
  {
    path: "/community",
    name: "Community",
    component: Community,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
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
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
