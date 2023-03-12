import { Config, Plugin, AsyncPlugin } from "payload/config";
import addCreatedBy from "./addCreatedBy";
import addIsArchived from "./addIsArchived";
import addLastModified from "./addLastModified";
import addDisplayName from "./addDisplayName";
import globalDefaultDisplayNames from "./globalDefaultDisplayNames";

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
  addIsArchived,
  addCreatedBy,
  addLastModified,
  addDisplayName,
  globalDefaultDisplayNames,
);

export default metadataPlugin;
