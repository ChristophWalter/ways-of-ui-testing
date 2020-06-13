import { render, fireEvent } from "@testing-library/vue"
import PizzaSelection from "@/components/PizzaSelection"
import axios from "axios"

jest.mock("axios")

it("should submit the selected pizza", async () => {
  axios.post.mockResolvedValue()
  const { getByText, getByRole } = render(PizzaSelection)

  await fireEvent.click(getByRole("radio", { name: "Funghi" }))
  await fireEvent.click(getByRole("button", { name: "bestellen" }))

  expect(axios.post).toHaveBeenCalledWith("/api/order/free", {
    pizza: "Funghi",
  })
  expect(getByText("Wir haben deine Bestellung erhalten.")).toBeInTheDocument()
  expect(
    getByRole("group", { name: "Welche Pizza möchtest du?" })
  ).toBeDisabled()
  expect(getByRole("button", { name: "bestellen" })).toBeDisabled()
})
