import { CollectionBeforeChangeHook, Context } from 'payload/types';

type RecordData = {
  [key: string]: any;
};

type GenerateDisplayNameArgs = {
  fieldSlugs: string[];
  separator: string;
  displayNameField: string;
};

const generateDisplayNameHook = ({ fieldSlugs, separator = ', ', displayNameField }: GenerateDisplayNameArgs): CollectionBeforeChangeHook => {
  return async ({ data }: Context<RecordData>): Promise<RecordData> => {
    let displayName = '';
    for (let i = 0; i < fieldSlugs.length; i++) {
      const slug = fieldSlugs[i];
      const isNested = slug.includes('.');
      const value = isNested ? parseNestedValue(data, slug) : data[slug];
      if (value) {
        displayName += `${value}${i === fieldSlugs.length - 1 ? '' : separator}`;
      }
    }
    data[displayNameField] = displayName;
    return data;
  };
};

const parseNestedValue = (data: RecordData, slug: string): any => {
  const [parentSlug, nestedSlug] = slug.split('.');
  const parentValue = data[parentSlug];
  if (!parentValue) {
    return null;
  }
  return parentValue[nestedSlug];
};

export default generateDisplayNameHook;
