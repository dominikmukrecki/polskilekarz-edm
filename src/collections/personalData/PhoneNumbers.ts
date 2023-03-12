import { CollectionConfig } from 'payload/types';
import { phoneNumberField } from '../common/fields';

const PhoneNumbers: CollectionConfig = {
  slug: 'phone-numbers',
  fields: [phoneNumberField],
};

export default PhoneNumbers;