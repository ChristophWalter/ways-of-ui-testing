<template>
  <div>
    <div class="pizza" v-for="pizza in pizzas" :key="pizza">
      <div class="pizza__name">{{ pizza }}</div>
      <router-link class="pizza__order-button" :to="`/pizza/checkout/${pizza}`"
        >bestellen</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "PizzaSelection",
  data() {
    return {
      pizzas: ["Funghi", "Vegetariana", "Margherita"],
    }
  },
}
</script>
<style scoped>
.pizza {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  margin-bottom: 10px;
}
.pizza__order-button {
  background: none;
  border: none;
  border-left: 1px solid black;
  padding-left: 5px;
}
</style>
