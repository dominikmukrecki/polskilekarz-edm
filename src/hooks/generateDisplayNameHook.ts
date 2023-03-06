import { CollectionBeforeChangeHook, Context } from 'payload/types';

type RecordData = {
  [key: string]: any;
};

type GenerateDisplayNameArgs = {
  defaultValue: string;
};

const generateDisplayName = ({ defaultValue }: GenerateDisplayNameArgs) => {
  return async ({ data, collection }: Context<RecordData>): Promise<RecordData> => {
    if (!data.displayName) {
      data.displayName = defaultValue;
    }

    const displayNameField = collection.fields.find((field) => field.slug === 'displayName');

    if (!displayNameField) {
      await payload.fields.add(collection, {
        type: 'text',
        name: 'displayName',
        label: 'Display Name',
        required: false,
        defaultValue,
      });
    }

    return data;
  };
};

const generateDisplayNameHook: CollectionBeforeChangeHook = generateDisplayName({
  defaultValue: 'New Record',
});

export default generateDisplayNameHook;
