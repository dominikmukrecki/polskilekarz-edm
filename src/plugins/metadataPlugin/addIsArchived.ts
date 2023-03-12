import { Config, Plugin } from 'payload/config';

const addIsArchived: Plugin = (incomingConfig: Config): Config => {
  incomingConfig.collections.forEach((collection) => {
    // Exclude collections with auth enabled
    if (!collection.auth) {
      collection.fields.push({
        name: 'isArchived',
        label: 'Archived',
        type: 'checkbox',
        defaultValue: false,
        admin: {
          position: 'sidebar',
        },
      });
    }
  });

  return incomingConfig;
};

export default addIsArchived;