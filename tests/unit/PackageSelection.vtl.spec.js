import Home from "@/views/Home"
import VueFormWizard from "vue-form-wizard"
import { render, fireEvent } from "@testing-library/vue"

it("should select the correct package", async () => {
  const DIALOG_CONTENT = "Thanks for your interest!"
  const { getByText, queryByText, getByLabelText } = render(Home, {}, vue => {
    vue.use(VueFormWizard)
  })
  expect(queryByText(DIALOG_CONTENT)).toBeNull()
  await fireEvent.click(getByText("BUY"))
  getByText(DIALOG_CONTENT)
  expect(getByLabelText("Buy it straight away")).toHaveAttribute(
    "aria-selected",
    "true"
  )
  await fireEvent.click(getByLabelText("Cancel"))
  expect(queryByText(DIALOG_CONTENT)).toBeNull()
})
