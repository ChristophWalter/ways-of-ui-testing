<template>
  <div class="checkout">
    <div class="pizza__list">
      <label class="pizza__amount-label" for="amount">Anzahl</label>
      <input
        size="2"
        type="text"
        id="amount"
        class="pizza__amount"
        v-model="amount"
      />
      <span class="pizza__name">
        {{ pizza }}
      </span>
    </div>
    <hr />
    <button
      class="checkout__submit"
      @click="send"
      :disabled="state === 'loading'"
    >
      Bestellung abschicken
    </button>
    <div v-if="this.state === 'success'">
      Wir haben deine Bestellung erhalten
    </div>
    <div v-else-if="this.state === 'error'">
      Leider ist etwas schief gelaufen. Versuchs doch mal telefonisch.
    </div>
  </div>
</template>
<script>
import axios from "axios"

export default {
  name: "PizzaCheckout",
  props: ["pizza"],
  data() {
    return {
      amount: 1,
      state: "initial",
    }
  },
  methods: {
    send() {
      this.state = "loading"
      axios
        .post("/api/buy/", {
          pizza: [{ name: this.pizza, amount: this.amount }],
        })
        .then(() => {
          this.state = "success"
        })
        .catch(() => {
          this.state = "error"
        })
    },
  },
}
</script>
<style scoped>
.checkout {
  text-align: left;
}
.checkout__submit {
  padding: 10px 5px;
  background: none;
  border: 1px solid black;
}
.pizza__amount-label {
  display: none;
}
</style>
