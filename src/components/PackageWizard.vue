<template>
  <div class="wizard">
    <div class="wizard__content">
      <button class="close" @click="$emit('close')" aria-label="Cancel">
        X
      </button>
      <form-wizard
        title="Thanks for your interest!"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi
        eos exercitationem impedit in magni nisi reprehenderit velit voluptate
        voluptatibus! Architecto deserunt facere itaque maiores optio quidem quo
        reiciendis vitae."
        @on-complete="$emit('close')"
      >
        <tab-content title="Try our buy">
          <fieldset class="fieldset">
            <input
              type="radio"
              id="try"
              name="Mode"
              value="try"
              v-model="selectedMode"
            />
            <label for="try"> Try it first</label><br />
            <input
              type="radio"
              id="buy"
              name="Mode"
              value="buy"
              v-model="selectedMode"
            />
            <label for="buy"> Buy it straight away</label>
          </fieldset>
        </tab-content>
        <tab-content title="Additional Info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          aliquam consequatur dolor ducimus eligendi enim ipsa ipsum magnam
          minima modi mollitia nulla numquam, odit officia quidem sapiente
          similique sit veniam.
        </tab-content>
        <tab-content title="Summary">
          You chose to {{ selectedMode }}.
          <hr />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
          fugiat sequi! Accusamus commodi corporis delectus est laboriosam modi
          nihil, optio perferendis quas similique soluta tenetur ullam unde?
          Dignissimos, soluta sunt!
        </tab-content>
      </form-wizard>
    </div>
  </div>
</template>
<script>
export default {
  name: "PackageWizard",
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
  position: relative;
}
.fieldset {
  text-align: left;
}
.close {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 20px;
}
</style>
