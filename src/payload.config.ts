import { buildConfig } from 'payload/config';
import path from 'path';
import TodoLists from './collections/TodoLists';
import Users from './collections/Users';
import dotenv from 'dotenv';

dotenv.config({
  path: path.resolve(__dirname, '../stack.env'),
});

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    TodoLists,
    Users,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
