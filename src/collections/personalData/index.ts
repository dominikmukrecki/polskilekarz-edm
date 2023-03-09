import Contacts from './Contacts';
import Emails from './Emails';
import PhoneNumbers from './PhoneNumbers';
import Addresses from './Addresses';

const PersonalData = [
  Contacts,
  Emails,
  PhoneNumbers,
  Addresses,
];

const adminGroup = 'Personal Data';

PersonalData.forEach(collection => {
  if (collection.admin) {
    collection.admin.group = adminGroup;
  } else {
    collection.admin = { group: adminGroup };
  }
});

export default PersonalData;
