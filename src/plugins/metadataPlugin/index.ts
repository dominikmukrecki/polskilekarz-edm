import { Config, Plugin } from 'payload/config';
import addCreatedBy from './addCreatedBy';
import addIsArchived from './addIsArchived';
import addLastModified from './addLastModified';
import addDisplayName from './addDisplayName';

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
