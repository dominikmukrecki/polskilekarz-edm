import { CollectionBeforeChangeHook, Context } from 'payload/types';

type RecordData = {
  [key: string]: any;
};

type GenerateDisplayNameArgs = {
  template: string;
  displayNameField: string;
  defaultDisplayName?: string;
};


const parseSlug = (slug: string, data: RecordData): any => {
  const [key, ...rest] = slug.split('.');
  const value = data[key];

  if (value !== undefined && rest.length) {
    return parseSlug(rest.join('.'), value);
  }

  return value;
};

const generateDisplayNameHook = ({ template, displayNameField, defaultDisplayName }: GenerateDisplayNameArgs): CollectionBeforeChangeHook => {
  return async ({ data }: Context<RecordData>): Promise<RecordData> => {
    let displayName = defaultDisplayName || template;
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

export default generateDisplayNameHook;
