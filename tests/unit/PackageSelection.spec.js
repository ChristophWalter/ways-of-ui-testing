import { createLocalVue, mount } from "@vue/test-utils"
import Home from "@/views/Home"
import VueFormWizard from "vue-form-wizard"
import Vue from "vue"

it("should select the correct package", async () => {
  const localVue = createLocalVue()
  localVue.use(VueFormWizard)
  const wrapper = mount(Home, {
    localVue,
  })
  expect(wrapper.text()).not.toContain("Thanks for your interest!")
  wrapper.find(".buy").trigger("click")
  await Vue.nextTick()
  expect(wrapper.text()).toContain("Thanks for your interest!")
  expect(wrapper.find("[name=Mode][aria-selected=true]").attributes('value')).toEqual('buy')
  wrapper.find("[aria-label=Cancel]").trigger("click")
  await Vue.nextTick()
  expect(wrapper.text()).not.toContain("Thanks for your interest!")
})
