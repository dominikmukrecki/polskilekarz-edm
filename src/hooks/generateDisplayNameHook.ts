import { CollectionBeforeOperationHook } from 'payload/types';

const beforeOperationHook: CollectionBeforeOperationHook = async ({
  args,
  operation,
  collection,
  payload,
}) => {
  const fields = collection.fields || [];

  if (operation === 'create' && !fields.some((field) => field.slug === 'displayName')) {
    await payload.fields.add(collection, {
      type: 'text',
      name: 'Display Name',
      label: 'Display Name',
      required: false,
      defaultValue: 'New Record',
    });
  }
  return args;
};

export default beforeOperationHook;