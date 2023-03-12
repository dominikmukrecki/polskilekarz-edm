import { Config, Plugin, AsyncPlugin } from "payload/config";
import addCreatedBy from "./addCreatedBy";
import addLastModified from "./addLastModified";
import addDisplayName from "./addDisplayName";
import addDisplayNameHook from "./addDisplayNameHook";

const composePlugins = (...plugins: Plugin[]): AsyncPlugin => {
  return async (config: Config) => {
    let result = config;
    for (const plugin of plugins) {
      result = await plugin(result);
    }
    return result;
  };
};

const metadataPlugin = composePlugins(
  addCreatedBy,
  addLastModified,
  addDisplayName,
  addDisplayNameHook,
);

export default metadataPlugin;
