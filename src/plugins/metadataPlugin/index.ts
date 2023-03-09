import { addLastModified } from './addLastModified';
import { addCreatedBy } from './addCreatedBy';
import { addIsArchived } from './addIsArchived';

const mergePlugins() {
  return [addLastModified, addCreatedBy, addIsArchived];
}

export default metadataPlugin;
