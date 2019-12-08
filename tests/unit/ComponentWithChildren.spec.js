import { shallowMount } from "@vue/test-utils";
import ComponentWithChildren from "@/components/ComponentWithChildren.vue";

describe("ComponentWithChildren.vue", () => {
  beforeAll(() => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve());
  });

  it("does not fail when mocking $root", async () => {
    const Parent = {
      data() {
        return {
          globalText: "Mocked global text"
        };
      }
    };

    const wrapper = shallowMount(ComponentWithChildren, {
      propsData: { showChildren: true },
      parentComponent: Parent
    });

    expect(wrapper.text()).toBe("Component with children");
  });
});
