import { addLastModified } from './addLastModified';
import { addCreatedBy } from './addCreatedBy';
import { addIsArchived } from './addIsArchived';

const metadataPlugin = () => [
  addLastModified(),
  addCreatedBy(),
  addIsArchived(),
];

export default metadataPlugin;