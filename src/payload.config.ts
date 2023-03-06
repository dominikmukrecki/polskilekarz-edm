import { buildConfig } from 'payload/config';
import path from 'path';

// Import your collection definitions
import Contacts from './collections/personal/Contacts';
import Users from './collections/personal/Users';
import Patients from './collections/personal/Patients';

import Medicines from './collections/medicines/Medicines';
import MedicineAmounts from './collections/medicines/MedicineAmounts';
import DosageDescriptions from './collections/medicines/DosageDescriptions';

import Prescriptions from './collections/documents/Prescriptions';

import ICD10 from './collections/indexes/ICD10';

const locales = ['en', 'pl'];
const defaultLocale = 'en';

// Build and export the Payload configuration object
export default buildConfig({
  // Define your Payload server settings
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  cors: '*',

  // Customize the Payload admin UI
  admin: {
    user: Users.slug, // The Users collection is used for authentication
    css: path.resolve(__dirname, 'scss/stylesheet.scss'), // Custom stylesheet for admin UI
  },

  // Define your Payload collections
  collections: [
    Users,
    Contacts,
    Patients,
    Medicines,
    Prescriptions,
    MedicineAmounts,
    DosageDescriptions,
    ICD10,
  ],

  // Configure TypeScript output
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },

  // Configure GraphQL schema output
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },

  // Configure internationalization (i18n)
  i18n: {
    locales,
    defaultLocale,
  },
  localization: {
    locales,
    defaultLocale,
  },
});
