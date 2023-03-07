import { Config, Plugin } from 'payload/config';

const addDisplayName: Plugin = (incomingConfig: Config): Config => {
  // Spread the existing config
  const config: Config = {
    ...incomingConfig,
    collections: incomingConfig.collections.map((collection) => {

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
            defaultValue: () => `New ${collection.labels.singular}`,
            admin: {
              position: 'sidebar',
              readOnly: true,
              displayNameField: 'displayName',
            },
          },
        ],
      };
    }),
  };

  return config;
};

export default addDisplayName;
