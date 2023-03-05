import { buildConfig } from 'payload/config';
import path from 'path';
import Contacts from './collections/Contacts';
import Users from './collections/Users';
import Tests from '.collection/Tests';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  cors: '*',
  admin: {
    user: Users.slug,
  },
  collections: [
    Contacts,
    Users,
    Tests,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
