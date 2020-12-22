import Vue from "vue";
import VueRouter from "vue-router";
import AuthRequired from "./utils/AuthRequired";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("./views/home"),
        redirect: "/app",
    },
    {
        path: "/app",
        component: () => import("./views/app"),
        redirect: "/app/opt",
        beforeEnter: AuthRequired,
    },
    {
        path: "/user",
        component: () => import("./views/user"),
        redirect: "/user/login",
    },
    {
        path: "/error",
        component: () => import("./views/Error")
    },
    {
        path: "*",
        component: () => import("./views/Error")
    }
];


const router = new VueRouter({
    linkActiveClass: "active",
    routes,
    mode: "history"
  });
  
  export default router;