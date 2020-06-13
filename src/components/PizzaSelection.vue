<template>
  <div class="pizza-selection">
    <p>Glückwunsch, deine erste Pizza ist gratis.</p>
    <fieldset class="fieldset" :disabled="inputIsDisabled" name="Pizza Auswahl">
      <legend>Welche Pizza möchtest du?</legend>
      <template v-for="pizza in pizzas">
        <div :key="pizza">
          <input
            type="radio"
            :id="pizza"
            name="Pizza"
            :value="pizza"
            v-model="selectedPizza"
          />
          <label :for="pizza">{{ pizza }}</label>
        </div>
      </template>
    </fieldset>
    <button class="submit" @click="submit" :disabled="inputIsDisabled">
      bestellen
    </button>
    <p v-if="submitState === 'success'">
      Wir haben deine Bestellung erhalten.
    </p>
    <p v-else-if="submitState === 'error'">
      Es ist ein Fehler aufgetreten. Bitte wende dich an unser Personal.
    </p>
  </div>
</template>
<script>
import axios from "axios"

export default {
  name: "PizzaSelection",
  data() {
    return {
      pizzas: ["Funghi", "Vegetariana", "Margherita"],
      selectedPizza: undefined,
      submitState: "initial",
    }
  },
  computed: {
    inputIsDisabled() {
      return this.submitState !== "initial"
    },
  },
  methods: {
    submit() {
      this.submitState = "loading"
      axios
        .post("/api/order/free", {
          pizza: this.selectedPizza,
        })
        .then(() => {
          this.submitState = "success"
        })
        .catch(() => {
          this.submitState = "error"
        })
    },
  },
}
</script>
<style scoped>
.pizza-selection {
  text-align: left;
}
.fieldset {
  border: none;
  margin: 0;
  padding: 0;
}
.submit {
  display: inline-block;
  border: 1px solid black;
  padding: 5px 10px;
  margin-top: 5px;
  background: none;
  cursor: pointer;
}
</style>
