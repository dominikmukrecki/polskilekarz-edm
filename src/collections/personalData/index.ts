import Contacts from './Contacts';
import Emails from './Emails';
import PhoneNumbers from './PhoneNumbers';
import Addresses from './Addresses';

const admin = {
  group: 'Personal Data',
};

const PersonalData = [
  Contacts,
  Emails,
  PhoneNumbers,
  Addresses,
];

PersonalData.forEach(collection => {
  collection.admin = {...admin, ...collection.admin};
});

export default PersonalData;