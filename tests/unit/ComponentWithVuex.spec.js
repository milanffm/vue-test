import { mount } from "@vue/test-utils"
import ComponentWithVuex from "@/components/ComponentWithVuex.vue"

it("renders a username using a mock store", () => {
	const wrapper = mount(ComponentWithVuex, {
		mocks: {
			$store: {
				state: { username: "alice" }
			}
		}
	})

	expect(wrapper.find(".username").text()).toBe("alice")
})