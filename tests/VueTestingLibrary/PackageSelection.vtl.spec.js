import VueFormWizard from "vue-form-wizard"
import { render, fireEvent } from "@testing-library/vue"
import PackageSelection from "@/components/PackageSelection"

it("should select the correct package", async () => {
  const { getByText, queryByText, getByRole } = render(
    PackageSelection,
    {},
    vue => {
      vue.use(VueFormWizard)
    }
  )

  const DIALOG_CONTENT = "Thanks for your interest!"
  expect(queryByText(DIALOG_CONTENT)).not.toBeInTheDocument()

  await fireEvent.click(getByRole("button", { name: "BUY" }))
  expect(getByText(DIALOG_CONTENT)).toBeInTheDocument()
  expect(getByRole("radio", { name: "Buy it straight away" })).toBeChecked()

  await fireEvent.click(getByRole("button", { name: "Cancel" }))
  expect(queryByText(DIALOG_CONTENT)).not.toBeInTheDocument()
})
