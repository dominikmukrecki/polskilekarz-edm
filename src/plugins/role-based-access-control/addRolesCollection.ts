import { Collection } from 'payload/types';
import { Config, Plugin } from 'payload/config';

const addRolesCollection: Plugin = async (incomingConfig: Config): Promise<Config> => {
  // Create the global 'roles' collection
  const rolesCollection: Collection = {
    slug: 'roles',
    fields: [
      {
        name: 'name',
        type: 'text',
        label: 'Name',
        required: true,
        admin: {
          position: 'sidebar',
        },
      },
      {
        name: 'description',
        type: 'textarea',
        label: 'Description',
        admin: {
          position: 'sidebar',
        },
      },
    ],
  };  

  // Add the 'roles' collection to the config
  const collections = [...incomingConfig.collections, rolesCollection];

  return {
    ...incomingConfig,
    collections,
  };
};

export default addRolesCollection;
