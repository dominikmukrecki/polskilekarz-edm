import { Config, Plugin } from 'payload/config';
import addLastModified from './addLastModified';
import addCreatedBy from './addCreatedBy';
import addIsArchived from './addIsArchived';

const metadataPlugin: Plugin = (incomingConfig: Config): Config => {
  return addCreatedBy(addIsArchived(addLastModified(incomingConfig)));
};

export default metadataPlugin;