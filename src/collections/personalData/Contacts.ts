import { CollectionConfig } from 'payload/types';
import { name, emailList, phoneList, addressList } from '../common/fields';

const Contacts: CollectionConfig = {
  slug: 'contacts',
  labels: {
    singular: {
      en: 'Contact',
      pl: 'Kontakt',
    },
    plural: {
      en: 'Contacts',
      pl: 'Kontakty',
    },
  },
  fields: [
    name,
    emailList,
    phoneList,
    addressList,
  ],
};

export default Contacts;