import { Config, Plugin } from "payload/config";
import { CollectionConfig } from "payload/types";
import defaultDisplayNames from "./localization/defaultDisplayNames";

const addDisplayName: Plugin = async (
  incomingConfig: Config
): Promise<Config> => {
  // Spread the existing config
  const config: Config = {
    ...incomingConfig,
    collections: incomingConfig.collections.map(
      (collection: CollectionConfig) => {
        const displayNameField = {
          name: "displayName",
          label: "Display Name",
          type: "text",
          required: true,
          localized: true,
          defaultValue: ({ locale }) => {
            const defaultDisplayName = defaultDisplayNames[collection.slug];
            const fallbackDisplayName = defaultDisplayNames._fallback;
            return defaultDisplayName && defaultDisplayName[locale]
              ? defaultDisplayName[locale]
              : fallbackDisplayName[locale];
          },
          admin: {
            position: "sidebar",
            readOnly: true,
          },
        };

        // Spread each item that we are modifying,
        // and add our new field - complete with
        // hooks and proper admin UI config
        return {
          ...collection,
          fields: [...collection.fields, displayNameField],
          admin: {
            useAsTitle: "displayName",
            ...collection.admin,
          },
        };
      }
    ),
  };

  return config;
};

export default addDisplayName;
