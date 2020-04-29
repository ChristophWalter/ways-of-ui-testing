<template>
  <div class="wizard">
    <div class="wizard__content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi
        eos exercitationem impedit in magni nisi reprehenderit velit voluptate
        voluptatibus! Architecto deserunt facere itaque maiores optio quidem quo
        reiciendis vitae.
      </p>
      <fieldset class="fieldset">
        <input
          type="radio"
          id="try"
          name="Mode"
          value="try"
          :checked="selectedMode === 'try'"
          @click="selectedMode = 'try'"
        />
        <label for="try"> Try it first</label><br />
        <input
          type="radio"
          id="buy"
          name="Mode"
          value="buy"
          :checked="selectedMode === 'buy'"
          @click="selectedMode = 'buy'"
        />
        <label for="buy"> Buy it straight away</label>
      </fieldset>
      <div class="actions">
        <button @click="$emit('close')">CLOSE</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheWizard",
  data() {
    return {
      selectedMode: undefined,
    }
  },
  props: {
    mode: String,
  },
  mounted() {
    this.selectedMode = this.mode
  },
}
</script>
<style scoped>
.wizard {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.wizard__content {
  background: #fff;
  padding: 50px;
  max-width: 700px;
}
.fieldset {
  text-align: left;
}
.actions {
  margin-top: 20px;
  text-align: right;
}
</style>
