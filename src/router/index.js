import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home"
import PackageSelection from "@/components/PackageSelection"

Vue.use(VueRouter)

const routes = [
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
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
