import { Config, Plugin } from "payload/config";
import { CollectionConfig } from "payload/types";
import displayNameTemplates from "./localization/displayNameTemplates";

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
          async ({ data, req }) => {
            if (data.displayName) {
              const template =
                displayNameTemplates[collection.slug]?.[req.locale]
              if (template) {
                data.displayName = template.replace(
                  /\${data\.(\w+)}/g,
                  (match, key) => {
                    const value = key.split(".").reduce((o, i) => o?.[i], data);
                    return value ?? "";
                  }
                );
              } else {
                data.displayName = `${data[firstField.name]}`;
              }
            }
            console.log(data);
            return data;
          },
          ...(collection.hooks?.beforeChange || []),
        ],
      };
    }
  };

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
