import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Careers from "../views/Careers.vue";
import ViewJob from "../views/ViewJob.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/careers",
    name: "Careers",
    component: Careers,
  },
  {
    path: "/careers/:id",
    name: "view-job",
    component: ViewJob,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;