import { Config, Plugin } from 'payload/config';
import { CollectionConfig } from 'payload/types';

const addDisplayName: Plugin = async (incomingConfig: Config): Promise<Config> => {
  // Spread the existing config
  const config: Config = {
    ...incomingConfig,
    collections: incomingConfig.collections.map((collection: CollectionConfig) => {      
      // Spread each item that we are modifying,
      // and add our new field - complete with
      // hooks and proper admin UI config
      return {
        ...collection,
        fields: [
          ...collection.fields,
          {
            name: 'displayName',
            label: 'Display Name',
            type: 'text',
            required: true,
            defaultValue: 'New Record',
            admin: {
              position: 'sidebar',
              readOnly: true,
            },
          },
        ],
        admin: {
          useAsTitle: 'displayName',
          ...collection.admin,
        },
      };
    }),
  };

  return config;
};

export default addDisplayName;
