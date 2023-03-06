import { buildConfig } from 'payload/config';
import path from 'path';

// Import your collection definitions
import Contacts from './collections/Contacts';
import Users from './collections/Users';
import Patients from './collections/Patients';
import Medicines from './collections/Medicines';
import MedicineAmounts from './collections/MedicineAmounts';
import DosageDescriptions from './collections/DosageDescriptions';
import Prescriptions from './collections/Prescriptions';
import ICD10 from './collections/ICD10';

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
    locales: ['en-US', 'pl-PL'], // Supported locales
    defaultLocale: 'en-US', // Default locale
  },
  localization: {
    locales: ['en-US', 'pl-PL'], // Supported locales
    defaultLocale: 'en-US', // Default locale
  },
});
