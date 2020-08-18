<script lang="ts">
import Vue from "vue";
import { TestButton } from "diondre-web-components-vue";

export default Vue.extend({
  name: "ServeDev",
  data() {
    return {
      variation: "warning",
    };
  },
  components: {
    TestButton,
  },
  methods: {
    changeTheme(): void {
      console.log("changedd");
      this.variation = "primary";
      console.log(this.variation);
    },
  },
});
</script>

<template>
  <div id="app">
    <TestButton :variation="variation">Click Me</TestButton>
    <button @click="changeTheme">Change</button>
  </div>
</template>
