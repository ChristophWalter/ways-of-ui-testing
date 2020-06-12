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

  const DIALOG_CONTENT = "Thanks for your interest!"
  expect(wrapper.text()).not.toContain(DIALOG_CONTENT)

  await wrapper.find("button.buy").trigger("click")
  expect(wrapper.text()).toContain(DIALOG_CONTENT)
  expect(wrapper.find("input[name=Mode][value=buy]").element.checked).toBeTruthy()

  await wrapper.find("button[aria-label=Cancel]").trigger("click")
  expect(wrapper.text()).not.toContain(DIALOG_CONTENT)
})
