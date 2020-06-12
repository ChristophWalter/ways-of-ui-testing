<template>
  <div class="home">
    <h1>Welcome to this special landing page.</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorem
      enim ipsa odit tempora. Deleniti facilis illo molestiae placeat sequi
      similique temporibus. Ad consequatur dolorem eius et obcaecati provident,
      quo?
    </p>
    <button @click="openWizard('try')">TRY</button>
    <button @click="openWizard('buy')" class="buy">BUY</button>
    <PackageWizard v-if="mode" :mode="mode" @close="mode = null" />
  </div>
</template>

<script>
import PackageWizard from "@/components/PackageWizard"

export default {
  name: "SelectionExample",
  components: {
    PackageWizard,
  },
  data() {
    return {
      mode: undefined,
    }
  },
  methods: {
    openWizard(mode) {
      this.mode = mode
    },
  },
}
</script>
<style scoped>
.buy {
  margin-left: 30px;
}
</style>
