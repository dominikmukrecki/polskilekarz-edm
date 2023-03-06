import { buildConfig } from 'payload/config';
import path from 'path';
import Contacts from './collections/Contacts';
import Users from './collections/Users';
import Patients from './collections/Patients';
import Medicines from './collections/Medicines';
import MedicineAmounts from './collections/MedicineAmounts';
import DosageDescriptions from './collections/DosageDescriptions';
import Prescriptions from './collections/Prescriptions';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  cors: '*',
  admin: {
    user: Users.slug,
    css: path.resolve(__dirname, 'scss/stylesheet.scss'),
  },
  collections: [
    Users,
    Contacts,
    Patients,
    Medicines,
    Prescriptions,
    MedicineAmounts,
    DosageDescriptions,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  i18n: {
    locales: ['en-US', 'pl-PL'],
    defaultLocale: 'en-US',
  },
});
