import Contacts from './personalData/Contacts';
import Emails from './personalData/Emails';
import PhoneNumbers from './personalData/PhoneNumbers';

const PersonalData = [
  Contacts,
  Emails,
  PhoneNumbers,
];

const adminGroup = 'Personal Data';

personalDataCollections.forEach(collection => {
  if (collection.admin) {
    collection.admin.group = adminGroup;
  } else {
    collection.admin = { group: adminGroup };
  }
});

export default PersonalData;
