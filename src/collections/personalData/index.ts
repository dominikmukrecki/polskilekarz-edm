import Contacts from './Contacts';
import Emails from './Emails';
import PhoneNumbers from './PhoneNumbers';
import Addresses from './Addresses';

const PersonalData = [
  ...Contacts,
  ...Emails,
  ...PhoneNumbers,
  ...Addresses,
].map(collection => ({
  ...collection,
  admin: {
    ...(collection.admin || {}),
    group: 'Personal Data',
  },
}));

export default PersonalData;