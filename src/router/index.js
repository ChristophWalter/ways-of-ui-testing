import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home"
import PackageSelection from "@/components/PackageSelection"
import PizzaSelection from "@/components/PizzaSelection"
import PizzaCheckout from "@/components/PizzaCheckout"

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
  {
    path: "/pizza",
    name: "PizzaSelection",
    component: PizzaSelection,
  },
  {
    path: "/pizza/checkout/:pizza",
    name: "PizzaCheckout",
    component: PizzaCheckout,
    props: true,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
