import "./assets/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import Privacy from "./Privacy.vue";
import TermsAndConditions from "./TermsAndConditions.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/privacy", component: Privacy },
  { path: "/terms", component: TermsAndConditions },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
