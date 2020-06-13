import { mount } from "@vue/test-utils"
import axios from "axios"
import PizzaSelection from "@/components/PizzaSelection"

jest.mock("axios")

it("should submit the selected pizza", async () => {
  axios.post.mockResolvedValue()
  const wrapper = mount(PizzaSelection)

  await wrapper.find('input[name="Pizza"][value="Funghi"]').trigger("click")
  await wrapper.find("button.submit").trigger("click")

  expect(axios.post).toHaveBeenCalledWith("/api/order/free", { pizza: "Funghi" })
  expect(wrapper.text()).toContain("Wir haben deine Bestellung erhalten.")

  expect(wrapper.find('fieldset[name="Pizza Auswahl"]').element.disabled).toBeTruthy()
  expect(wrapper.find("button.submit").element.disabled).toBeTruthy()
})
