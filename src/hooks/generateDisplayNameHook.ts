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
      const value = data[slug];
      if (value) {
        displayName += `${value}${i === fieldSlugs.length - 1 ? '' : separator}`;
      }
    }
    data[displayNameField] = displayName;
    return data;
  };
};

export default generateDisplayNameHook;
