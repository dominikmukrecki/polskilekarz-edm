import { CollectionConfig, Field } from 'payload/types';
import { addressField } from '../common/fields';

export const Addresses: CollectionConfig = {
  slug: 'addresses',
  fields: [addressField],
};

export const addressList: Field = {
  name: "addressList",
  type: "relationship",
  relationTo: Addresses.slug,
  hasMany: true,
};