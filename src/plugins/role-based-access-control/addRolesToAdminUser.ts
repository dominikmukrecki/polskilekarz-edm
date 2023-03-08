import { Config, Plugin } from 'payload/config';

const addRolesToAdminUser: Plugin = async (incomingConfig: Config): Promise<Config> => {
  // Get the slug of the authentication collection from the config
  const authCollectionSlug = incomingConfig.admin?.user;

  if (!authCollectionSlug) {
    throw new Error('No authentication collection specified in the config');
  }

  // Find the authentication collection
  const authCollection = incomingConfig.collections.find(
    collection => collection.slug === authCollectionSlug
  );

  if (!authCollection) {
    throw new Error(`The '${authCollectionSlug}' collection was not found`);
  }

  // Find the global roles collection
  const rolesCollection = incomingConfig.collections.find(
    collection => collection.slug === 'roles'
  );

  if (!rolesCollection) {
    throw new Error('The roles collection was not found');
  }

  // Update the admin user collection to add the 'roles' field with the retrieved roles
  const adminUserCollection = incomingConfig.collections.find(
    collection => collection.slug === 'admin.user'
  );

  if (!adminUserCollection) {
    throw new Error('The admin.user collection was not found');
  }

  const rolesField = {
    name: 'roles',
    type: 'relationship',
    relationTo: rolesCollection.slug,
    hasMany: true,
    admin: {
      position: 'sidebar',
    },
  };

  if (adminUserCollection.fields) {
    adminUserCollection.fields.push(rolesField);
  } else {
    adminUserCollection.fields = [rolesField];
  }

  // Update the collection in the config
  const collections = incomingConfig.collections.map(collection => {
    if (collection.slug === 'admin.user') {
      return adminUserCollection;
    }

    return collection;
  });

  return {
    ...incomingConfig,
    collections,
  };
};

export default addRolesToAdminUser;