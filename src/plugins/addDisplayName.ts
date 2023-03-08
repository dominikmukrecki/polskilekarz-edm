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
      const defaultDisplayName = `New ${formattedLabels.singular}`;
      const existingDisplayNameField = collection.fields.find((field) => field.name === 'displayName');
      const defaultValue = existingDisplayNameField?.defaultValue || defaultDisplayName;
      const displayNameField = {
        name: 'displayName',
        label: 'Display Name',
        type: 'text',
        localized: true, // enable localized default value
        defaultValue,
        admin: {
          position: 'sidebar',
          readOnly: true,
        },
      };
      return {
        ...collection,
        fields: [
          ...collection.fields.filter((field) => field.name !== 'displayName'),
          displayNameField,
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
