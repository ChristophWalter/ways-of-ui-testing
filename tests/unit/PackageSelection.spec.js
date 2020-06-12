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

  await wrapper.find(".buy").trigger("click")
  expect(wrapper.text()).toContain(DIALOG_CONTENT)
  expect(wrapper.find("[name=Mode][value=buy]").element.checked).toBeTruthy()

  await wrapper.find("[aria-label=Cancel]").trigger("click")
  expect(wrapper.text()).not.toContain(DIALOG_CONTENT)
})
