import Counter from "@/components/Counter.vue";
import { mount } from "@vue/test-utils";

describe("Counter", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Counter);
  });

  it("defaults count to 0", () => {
    expect(wrapper.vm.count).toBe(0);
  });

  it("increases count when button is clicked", () => {
    wrapper.setData({ count: 0 });

    const button = wrapper.findAll("button").at(0);

    button.trigger("click");

    expect(wrapper.vm.count).toBe(1);
  });

  it("decreases count when button is clicked", () => {
    wrapper.setData({ count: 1 });

    const button = wrapper.findAll("button").at(1);

    button.trigger("click");

    expect(wrapper.vm.count).toBe(0);
  });
});
