import { Config, Plugin } from 'payload/config';

const addRolesToAdminUser: Plugin = async (incomingConfig: Config): Promise<Config> => {
  // Get the slug of the default admin collection from the config
  const adminCollectionSlug = incomingConfig.admin?.collection?.slug;

  if (!adminCollectionSlug) {
    throw new Error('No admin collection specified in the config');
  }

  // Find the default admin collection
  const adminCollectionIndex = incomingConfig.collections.findIndex(
    collection => collection.slug === adminCollectionSlug
  );

  if (adminCollectionIndex === -1) {
    throw new Error(`The '${adminCollectionSlug}' collection was not found`);
  }

  // Update the collection to add the 'roles' field with the retrieved roles
  const adminCollection = incomingConfig.collections[adminCollectionIndex];
  adminCollection.fields.push({
    name: 'roles',
    type: 'relationship',
    relationTo: 'roles',
    hasMany: true,
    admin: {
      position: 'sidebar',
    },
  });

  // Update the collection in the config
  const collections = [...incomingConfig.collections];
  collections[adminCollectionIndex] = adminCollection;

  return {
    ...incomingConfig,
    collections,
  };
};

export default addRolesToAdminUser;
