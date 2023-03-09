import { Config, Plugin } from 'payload/config';

const addIsArchived: Plugin = (incomingConfig: Config): Config => {
  incomingConfig.collections.forEach((collection) => {
    collection.fields.push({
      name: 'isArchived',
      label: 'Archived',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    });
  });

  return incomingConfig;
};

export default addIsArchived;