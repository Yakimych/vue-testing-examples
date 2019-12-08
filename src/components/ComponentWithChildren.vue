<template>
  <div class="hello">
    <h1>Component with children</h1>
    <ComponentWithData v-if="showChildren" :title="$root.globalText" />
  </div>
</template>

<script>
import ComponentWithData from "./ComponentWithData";

export default {
  name: "ComponentWithChildren",
  components: {
    ComponentWithData
  },
  props: {
    showChildren: { type: Boolean, required: true }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
