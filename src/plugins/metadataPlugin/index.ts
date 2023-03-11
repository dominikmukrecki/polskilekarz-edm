import { Config, Plugin } from "payload/config";
import {
  addCreatedBy,
  addDisplayName,
  addIsArchived,
  addLastModified,
} from "./metadataPlugins";

const composePlugins = (...plugins: Plugin[]): Plugin => {
  return (config: Config) => {
    return plugins.reduce((acc, plugin) => {
      return plugin(acc);
    }, config);
  };
};

const metadataPlugin = composePlugins(
  addIsArchived,
  addCreatedBy,
  addLastModified,
  addDisplayName,
);

export default metadataPlugin;

// where metadataPlugins is a separate file that exports the individual metadata plugins