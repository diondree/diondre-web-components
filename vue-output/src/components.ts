/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from "vue";
import { createCommonRender } from "./vue-component-lib/utils";

import type { Components } from "diondre-web-components";

const customElementTags: string[] = ["test-button"];
Vue.config.ignoredElements = [
  ...Vue.config.ignoredElements,
  ...customElementTags,
];

export const TestButton = /*@__PURE__*/ Vue.extend({
  props: {
    button: {} as PropOptions<Components.TestButton["button"]>,
    disabled: {} as PropOptions<Components.TestButton["disabled"]>,
    type: {} as PropOptions<Components.TestButton["type"]>,
    size: {} as PropOptions<Components.TestButton["size"]>,
    variation: {} as PropOptions<Components.TestButton["variation"]>,
    btnType: {} as PropOptions<Components.TestButton["btnType"]>,
    fullHeight: {} as PropOptions<Components.TestButton["fullHeight"]>,
    noBorderRadius: {} as PropOptions<Components.TestButton["noBorderRadius"]>,
    fullWidth: {} as PropOptions<Components.TestButton["fullWidth"]>,
    alignment: {} as PropOptions<Components.TestButton["alignment"]>,
  },

  render: createCommonRender("test-button", []),
});
