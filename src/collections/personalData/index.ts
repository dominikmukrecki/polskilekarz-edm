import Contacts from './Contacts';
import Emails from './Emails';
import PhoneNumbers from './PhoneNumbers';
import Addresses from './Addresses';

const adminGroup = 'Personal Data';

const PersonalData = [
  ...(Contacts ?? []),
  ...(Emails ?? []),
  ...(PhoneNumbers ?? []),
  ...(Addresses ?? []),
].reduce((acc, collection) => {
  return [
    ...acc,
    {
      ...collection,
      admin: {
        ...(collection.admin ?? {}),
        group: adminGroup,
      },
    },
  ];
}, []);

export default PersonalData;