import { CollectionConfig } from 'payload/types';
import { phoneNumberField } from '../common/fields';

const PhoneNumbers: CollectionConfig = {
  slug: 'phoneNumbers',
  fields: [phoneNumberField],
};

export default PhoneNumbers;