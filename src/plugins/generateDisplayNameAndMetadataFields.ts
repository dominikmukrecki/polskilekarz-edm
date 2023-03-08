import { Config, Plugin } from 'payload/config';
import { formatLabels } from 'payload/dist/utilities/formatLabels';

type Collection = {
  [key: string]: any;
};

type GenerateDisplayNameArgs = {
  template: string;
  displayNameField?: string;
};

type AddMetadataFieldsArgs = {
  fields: {
    name: string;
    label?: string;
    type: string;
    required?: boolean;
    localized?: boolean;
    defaultValue?: any;
    [key: string]: any;
  }[];
};

const parseSlug = (slug: string, data: Record<string, any>): any => {
  const [key, ...rest] = slug.split('.');
  const value = data[key];

  if (value !== undefined && rest.length) {
    return parseSlug(rest.join('.'), value);
  }

  return value;
};

const generateDisplayNameHook = ({ template, displayNameField = 'displayName' }: GenerateDisplayNameArgs) => {
  return async ({ data }: any) => {
    let displayName = template;
    const matches = template.match(/\${(.*?)}/g);
    if (matches) {
      matches.forEach((match) => {
        const slug = match.slice(2, -1);
        const value = parseSlug(slug, data);
        displayName = displayName.replace(match, value !== undefined && value !== '' ? value : '');
      });
    }
    data[displayNameField] = displayName;
    return data;
  };
};

const addMetadataFields = ({ fields }: AddMetadataFieldsArgs) => {
  return ({ data }: any) => {
    Object.entries(data).forEach(([key, value]) => {
      const field = fields.find((field) => field.name === key);
      if (field) {
        data[key] = {
          ...field,
          value,
        };
      }
    });
    return data;
  };
};

const generateDisplayNameAndMetadataFields: Plugin = (incomingConfig: Config): Config => {
  const collectionDisplayNames = incomingConfig.globals?.collection_display_names;
  // Spread the existing config
  const config: Config = {
    ...incomingConfig,
    collections: incomingConfig.collections.map((collection) => {
      // Spread each item that we are modifying,
      // and add our new fields - complete with
      // hooks and proper admin UI config
      const formattedLabels = formatLabels(collection.slug);
      const defaultDisplayName = `New ${formattedLabels.singular}`;
      const existingDisplayNameField = collection.fields.find((field) => field.name === 'displayName');
      const defaultValue = existingDisplayNameField?.defaultValue || defaultDisplayName;
      const displayNameField = {
        name: 'displayName',
        label: 'Display Name',
        type: 'text',
        localized: true,
        defaultValue,
        admin: {
          position: 'sidebar',
          readOnly: true,
        },
      };
      const metadataFields = collectionDisplayNames?.find((displayNames: any) => displayNames.collection === collection.slug)?.fields || [];
      return {
        ...collection,
        fields: [
          ...collection.fields.filter((field) => field.name !== 'displayName'),
          displayNameField,
          ...metadataFields,
        ],
        hooks: {
          beforeChange: [
            generateDisplayNameHook({
              template: '${name}',
            }),
          ],
          afterChange: [
            addMetadataFields({
              fields: metadataFields,
            }),
          ],
        },
        admin: {
          ...collection.admin,
          useAsTitle: 'displayName',
        },
      };
    }),
  };

  return config;
};

export default generateDisplayNameAndMetadataFields;
