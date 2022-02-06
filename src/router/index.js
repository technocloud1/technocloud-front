import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Careers from "../views/Careers.vue";
import ViewJob from "../views/ViewJob.vue";
import ApplyJob from "../views/ApplyJob.vue";

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
    props:true,
    component: ViewJob,
  },
  {
    path: "/careers/:id/apple",
    name: "apply",
    props:true,
    component: ApplyJob,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;