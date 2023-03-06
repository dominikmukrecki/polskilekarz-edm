import { CollectionBeforeChangeHook, Context } from 'payload/types';

type RecordData = {
  [key: string]: any;
};

type GenerateDisplayNameArgs = {
  defaultLabel: string;
};

const generateDisplayName = ({ defaultLabel }: GenerateDisplayNameArgs) => {
  return async ({ data, collection }: Context<RecordData>): Promise<RecordData> => {
    const singularLabel = collection.labels.singular || 'Record';

    if (!data.displayName) {
      data.displayName = `New ${singularLabel}`;
    }

    const displayNameField = collection.fields.find((field) => field.slug === 'displayName');

    if (!displayNameField) {
      await payload.fields.add(collection, {
        type: 'text',
        name: 'Display Name',
        slug: 'displayName',
        label: 'Display Name',
        required: false,
        defaultValue: `New ${singularLabel}`,
      });
    }

    return data;
  };
};

const generateDisplayNameHook: CollectionBeforeChangeHook = generateDisplayName({
  defaultLabel: 'New Record',
});

export default generateDisplayNameHook;
