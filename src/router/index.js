import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home"
import PackageSelection from "@/components/PackageSelection"
import PizzaSelection from "@/components/PizzaSelection"

Vue.use(VueRouter)

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/package-selection",
    name: "SelectionExample",
    component: PackageSelection,
  },
  {
    path: "/pizza",
    name: "PizzaSelection",
    component: PizzaSelection,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
