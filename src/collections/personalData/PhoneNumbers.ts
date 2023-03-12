import { CollectionConfig, Field } from 'payload/types';
import { phoneNumberField } from '../common/fields';

export const PhoneNumbers: CollectionConfig = {
  slug: 'phone-numbers',
  fields: [phoneNumberField],
};

export const phoneList: Field = {
  name: "phoneList",
  type: "relationship",
  relationTo: PhoneNumbers.slug,
  hasMany: true,
}