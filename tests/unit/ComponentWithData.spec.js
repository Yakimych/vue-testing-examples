import { shallowMount } from "@vue/test-utils";
import ComponentWithData from "@/components/ComponentWithData.vue";

describe("ComponentWithData.vue", () => {
  beforeAll(() => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve());
  });

  it("contentIsShown is false initially", () => {
    const title = "new title";
    const wrapper = shallowMount(ComponentWithData, {
      propsData: { title }
    });

    expect(wrapper.vm.contentIsShown).toBe(false);
  });

  it("contentIsShown is set to true after toggleContent is called", () => {
    const title = "new title";
    const wrapper = shallowMount(ComponentWithData, {
      propsData: { title }
    });

    wrapper.vm.toggleContent();

    expect(wrapper.vm.contentIsShown).toBe(true);
  });
});
