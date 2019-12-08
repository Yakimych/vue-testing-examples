<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div v-if="contentIsShown">Hideable content</div>
    <button @click="toggleContent">Toggle content</button>
  </div>
</template>

<script>
export default {
  name: "ComponentWithData",
  mounted: function() {
    fetch("https://api.chucknorris.io/jokes/random");
  },
  props: {
    title: { type: String, required: true }
  },
  data() {
    return {
      contentIsShown: false
    };
  },
  computed: {},
  methods: {
    toggleContent: function() {
      this.contentIsShown = !this.contentIsShown;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
