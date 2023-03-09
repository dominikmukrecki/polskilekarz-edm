const adminGroup = 'Personal Data';

const PersonalData = [
  ...Contacts,
  ...Emails,
  ...PhoneNumbers,
  ...Addresses,
].reduce((acc, collection) => {
  return [
    ...acc,
    {
      ...collection,
      admin: {
        ...(collection.admin || {}),
        group: adminGroup,
      },
    },
  ];
}, []);

export default PersonalData;
