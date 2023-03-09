import Contacts from './Contacts';
import Emails from './Emails';
import PhoneNumbers from './PhoneNumbers';

const PersonalData = [
  Contacts,
  Emails,
  PhoneNumbers,
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

