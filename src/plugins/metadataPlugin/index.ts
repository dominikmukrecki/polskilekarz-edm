import { addLastModified } from './addLastModified';
import { addCreatedBy } from './addCreatedBy';
import { addIsArchived } from './addIsArchived';

const mergePlugins = () => [
  addLastModified(),
  addCreatedBy(),
  addIsArchived(),
];

export default mergePlugins;
