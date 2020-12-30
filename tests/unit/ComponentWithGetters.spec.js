import { mount } from "@vue/test-utils"
import ComponentWithGetters from "@/components/ComponentWithGetters"

it("renders a username using computed", () => {
	const wrapper = mount(ComponentWithGetters, {
		computed: {
			fullname: () => "Alice Doel"
		}
	})

	expect(wrapper.find(".fullname").text()).toBe("Alice Doel")
})