import { Config, Plugin, AsyncPlugin } from "payload/config";
import addLabelsAndTodos from "./addLabelsAndTodos";

const composePlugins = (...plugins: Plugin[]): AsyncPlugin => {
  return async (config: Config) => {
    let result = config;
    for (const plugin of plugins) {
      result = await plugin(result);
    }
    return result;
  };
};

const labelsAndTodos = composePlugins(addLabelsAndTodos);

export default labelsAndTodos;
