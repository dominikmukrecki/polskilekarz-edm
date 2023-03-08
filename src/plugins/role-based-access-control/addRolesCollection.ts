import { Collection } from 'payload/types';
import { Config, Plugin } from 'payload/config';

const addRolesCollection: Plugin = async (incomingConfig: Config): Promise<Config> => {
  // Create the global 'roles' collection
  const rolesCollection: Collection = {
    slug: 'roles',
    label: 'Roles',
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
        name: 'slug',
        type: 'slug',
        label: 'Slug',
        required: true,
        admin: {
          position: 'sidebar',
        },
      },
    ],
    timestamps: true,
  };

  // Add the 'roles' collection to the config
  const collections = [...incomingConfig.collections, rolesCollection];

  return {
    ...incomingConfig,
    collections,
  };
};

export default addRolesCollection;
