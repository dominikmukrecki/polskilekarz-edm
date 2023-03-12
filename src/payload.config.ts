import { buildConfig } from 'payload/config';
import collections from './collections';
import globals from './globals';
import plugins from './plugins';
import Users from "./collections/Users";
import path from "path";

// Import the addIsArchivedField plugin
// import addIsArchivedField from './plugins/addIsArchivedField';

const locales = ["en", "pl"];
const defaultLocale = "en";

// Build and export the Payload configuration object
export default buildConfig({
  // Define your Payload server settings
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  cors: "*",

  // Customize the Payload admin UI
  admin: {
    user: Users.slug, // The Users collection is used for authentication
    css: path.resolve(__dirname, "scss/stylesheet.scss"), // Custom stylesheet for admin UI
  },

  // Define your Payload collections
  collections,
  globals,
  // Configure TypeScript output
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },

  // Configure GraphQL schema output
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
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
  // Add the addIsArchivedField plugin
  plugins,
});
