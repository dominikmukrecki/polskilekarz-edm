import { CollectionConfig } from 'payload/types';
import { addressField } from '../common/fields';

const Addresses: CollectionConfig = {
  slug: 'addresses',
  fields: [addressField],
};

export default Addresses;
