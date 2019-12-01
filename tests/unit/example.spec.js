import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  beforeAll(() => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve());
  });

  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it.each([
    ["", true],
    ["a", false],
    ["new message", false]
  ])("for message '%s' messageIsEmpty is %s", (msg, expectedResult) => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });

    expect(wrapper.vm.messageIsEmpty).toBe(expectedResult);
  });
});
