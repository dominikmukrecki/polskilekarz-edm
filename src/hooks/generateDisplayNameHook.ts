import { CollectionBeforeOperationHook } from 'payload/types';

type GenerateDisplayNameArgs = {
  defaultValue: string;
};

const generateDisplayName = ({ defaultValue }: GenerateDisplayNameArgs) => {
  return async ({ collection, payload }: any) => {
    if (!collection.fields.some((field) => field.name === 'Display Name')) {
      await payload.fields.add(collection, {
        type: 'text',
        name: 'Display Name',
        label: 'Display Name',
        required: false,
        defaultValue,
      });
    }
  };
};

const generateDisplayNameHook: CollectionBeforeOperationHook = generateDisplayName({
  defaultValue: 'New Record',
});

export default generateDisplayNameHook;