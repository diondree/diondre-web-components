import Vue, { PluginFunction, VueConstructor } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const SmttDsVue: { install: InstallFunction };
export default SmttDsVue;

export const SmttDsVueSample: VueConstructor<Vue>;
