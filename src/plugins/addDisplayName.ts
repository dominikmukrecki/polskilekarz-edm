import { Config, Plugin } from 'payload/config';
import { formatLabels } from 'payload/dist/utilities/formatLabels';

type Collection = {
  [key: string]: any;
};

const addDisplayName: Plugin = (incomingConfig: Config): Config => {
  // Spread the existing config
  const config: Config = {
    ...incomingConfig,
    collections: incomingConfig.collections.map((collection) => {
      // Spread each item that we are modifying,
      // and add our new field - complete with
      // hooks and proper admin UI config
      const formattedLabels = formatLabels(collection.slug);
      const defaultDisplayName = collection.displayNameDefaultValue || `New ${formattedLabels.singular}`;
      return {
        ...collection,
        fields: [
          ...collection.fields,
          {
            name: 'displayName',
            label: 'Display Name',
            type: 'text',
            defaultValue: defaultDisplayName,
            admin: {
              position: 'sidebar',
              readOnly: true,
            },
          },
        ],
        admin: {
          ...collection.admin,
          useAsTitle: 'displayName',
        },
      };
    }),
  };

  return config;
};

export default addDisplayName;
