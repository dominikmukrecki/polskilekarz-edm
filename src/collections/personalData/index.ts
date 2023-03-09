import Contacts from './Contacts';
import Emails from './Emails';
import PhoneNumbers from './PhoneNumbers';
import Addresses from './Addresses';

const admin = {
  group: 'Personal Data',
};

const PersonalData = [
  ...Contacts.map(collection => ({
    ...collection,
    admin: {
      ...admin,
      ...collection.admin
    }
  })),
  ...Emails.map(collection => ({
    ...collection,
    admin: {
      ...admin,
      ...collection.admin
    }
  })),
  ...PhoneNumbers.map(collection => ({
    ...collection,
    admin: {
      ...admin,
      ...collection.admin
    }
  })),
  ...Addresses.map(collection => ({
    ...collection,
    admin: {
      ...admin,
      ...collection.admin
    }
  })),
];

export default PersonalData;
