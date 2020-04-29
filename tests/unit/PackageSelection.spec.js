import { createLocalVue, mount } from "@vue/test-utils"
import Home from "@/views/Home"
import VueFormWizard from "vue-form-wizard"
import Vue from "vue"

it("should select the correct package", async () => {
  const DIALOG_CONTENT = "Thanks for your interest!"
  const localVue = createLocalVue()
  localVue.use(VueFormWizard)
  const wrapper = mount(Home, {
    localVue,
  })
  expect(wrapper.text()).not.toContain(DIALOG_CONTENT)
  wrapper.find(".buy").trigger("click")
  await Vue.nextTick()
  expect(wrapper.text()).toContain(DIALOG_CONTENT)
  expect(
    wrapper.find("[name=Mode][aria-selected=true]").attributes("value")
  ).toEqual("buy")
  wrapper.find("[aria-label=Cancel]").trigger("click")
  await Vue.nextTick()
  expect(wrapper.text()).not.toContain(DIALOG_CONTENT)
})
