import Vue, { VNode } from "vue";
import Dev from "./serve.vue";

import {
  applyPolyfills,
  defineCustomElements,
} from "diondre-web-components/loader";

Vue.config.productionTip = false;

// Tell Vue to ignore all components defined in the test-components
// package. The regex assumes all components names are prefixed
// 'test'
Vue.config.ignoredElements = [/test-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});
Vue.config.productionTip = false;

new Vue({
  render: (h): VNode => h(Dev),
}).$mount("#app");
