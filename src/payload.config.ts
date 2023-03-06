import { buildConfig } from 'payload/config';
import path from 'path';

// Import your collection definitions
import Contacts from './collections/Contacts';
import Patients from './collections/Patients';

import Medicines from './collections/Medicines';
import MedicineAmounts from './collections/MedicineAmounts';
import DosageDescriptions from './collections/DosageDescriptions';

import Prescriptions from './collections/Prescriptions';

import ICD10 from './collections/ICD10';

import Users from './collections/Users';

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
    Contacts,
    Patients,
    Prescriptions,
    Medicines,
    MedicineAmounts,
    DosageDescriptions,
    ICD10,
    Users,
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
