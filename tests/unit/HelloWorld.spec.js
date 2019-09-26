import HelloWorld from "@/components/HelloWorld.vue";
import { shallowMount } from "@vue/test-utils";

describe("HelloWorld", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";

    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });

    // expect(wrapper.text()).toMatch(msg);
    expect(wrapper.text()).toMatchSnapshot(msg);
  });
});
