import Home from "@/views/Home"
import VueFormWizard from "vue-form-wizard"
import { render, fireEvent } from "@testing-library/vue"

it("should select the correct package", async () => {
  const { getByText, queryByText, getByLabelText } = render(Home, {}, vue => {
    vue.use(VueFormWizard)
  })
  expect(queryByText("Thanks for your interest!")).toBeNull()
  await fireEvent.click(getByText("BUY"))
  getByText("Thanks for your interest!")
  expect(getByLabelText("Buy it straight away")).toHaveAttribute('aria-selected', 'true')
  await fireEvent.click(getByLabelText("Cancel"))
  expect(queryByText("Thanks for your interest!")).toBeNull()
})
