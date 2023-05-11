import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import CallbackView from "../views/CallbackView.vue";
import User from "../components/User.vue";
import CreatePlayers from "../views/CreatePlayers.vue";
import RegisterView from "../views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/callback",
      name: "callback",
      component: CallbackView,
    },
    {
      path: "/createPlayer",
      name: "createPlayer",
      component: CreatePlayers,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "login" && localStorage.getItem("access_token")) {
    next({ path: "/" });
  } else if (to.name === "register" && localStorage.getItem("access_token")) {
    next({ path: "/" });
  } else if (
    to.name === "createPlayer" &&
    !localStorage.getItem("access_token")
  ) {
    next({ path: "/" });
  } else {
    next();
  }
});

export default router;
