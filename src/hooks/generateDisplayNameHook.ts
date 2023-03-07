import { CollectionBeforeChangeHook, Context } from 'payload/types';

type RecordData = {
  [key: string]: any;
};

type GenerateDisplayNameArgs = {
  fieldSlugs: string[];
  separator: string;
  displayNameField: string;
};

const parseSlug = (slug: string, data: RecordData): any => {
  const [key, ...rest] = slug.split('.');
  const value = data[key];

  if (value !== undefined && rest.length) {
    return parseSlug(rest.join('.'), value);
  }

  return value;
};

const generateDisplayNameHook = ({ fieldSlugs, separator = ', ', displayNameField }: GenerateDisplayNameArgs): CollectionBeforeChangeHook => {
  return async ({ data }: Context<RecordData>): Promise<RecordData> => {
    let displayName = '';
    for (let i = 0; i < fieldSlugs.length; i++) {
      const slug = fieldSlugs[i];
      const value = parseSlug(slug, data);
      if (value !== undefined && value !== '') {
        displayName += `${value}${i === fieldSlugs.length - 1 ? '' : separator}`;
      }
    }
    // Remove trailing separator if data is an array or object
    if (Array.isArray(data[displayNameField]) || typeof data[displayNameField] === 'object') {
      displayName = displayName.slice(0, -separator.length);
    }
    data[displayNameField] = displayName;
    return data;
  };
};

export default generateDisplayNameHook;
