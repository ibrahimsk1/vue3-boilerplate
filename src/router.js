
import { createWebHistory, createRouter } from "vue-router";
import AuthRequired from "./utils/AuthRequired";

const routes = [
    {
        path: "/",
        component: () => import("./Views/Home"),
        redirect: "/Home",
        beforeEnter: AuthRequired,
    },
    {
        path: "/Home",
        component: () => import("./Views/Home"),
        redirect: "/Home/Home",
        children: [
            {
              path: "Home",
              component: () => import("./Views/Home/Home")
            },
        ]
    },
    {
        path: "/Auth",
        component: () => import("./Views/Auth"),
        redirect: "/Views/Auth",
        children: [
          {
            path: "Auth",
            component: () =>
              import("./Views/Auth/Login")
          }
        ]
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () => import("./Views/Error/NotFound")
    },

];


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;