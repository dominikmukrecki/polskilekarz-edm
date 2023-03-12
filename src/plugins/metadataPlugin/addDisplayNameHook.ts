import { Config, Plugin } from "payload/config";
import { CollectionConfig } from "payload/types";

const addDisplayNameHook: Plugin = async (
  incomingConfig: Config
): Promise<Config> => {
  const addDisplayNameFieldHook = (collection: CollectionConfig) => {
    const displayNameField = collection.fields.find(
      (field) => field.name === "displayName"
    );
    const firstField = collection.fields[0];
    if (displayNameField) {
      collection.hooks = {
        beforeChange: [
          async ({ data }) => {
            if (data.displayName) {
              data.displayName = `${data[firstField.name]}`;
            }
            return data;
          },
          ...(collection.hooks?.beforeChange || []),
        ],
      };
    }
  };

  // Spread the existing config
  const config: Config = {
    ...incomingConfig,
    collections: incomingConfig.collections.map(
      (collection: CollectionConfig) => {
        addDisplayNameFieldHook(collection);
        return collection;
      }
    ),
  };

  return config;
};

export default addDisplayNameHook;
