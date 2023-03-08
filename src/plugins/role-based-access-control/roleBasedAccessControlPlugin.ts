import { Collection } from 'payload/types';
import { Config, Plugin } from 'payload/config';
import addRolesCollectionPlugin from './addRolesCollection.plugin';
import addRolesToAdminUserPlugin from './addRolesToAdminUser.plugin';

// Combined plugin for role-based access control
const roleBasedAccessControlPlugin: Plugin = async (incomingConfig: Config): Promise<Config> => {
  const configWithRolesCollection = await addRolesCollectionPlugin(incomingConfig);
  const configWithRolesField = await addRolesToAdminUserPlugin(configWithRolesCollection);
  return configWithRolesField;
};

export default roleBasedAccessControlPlugin;
