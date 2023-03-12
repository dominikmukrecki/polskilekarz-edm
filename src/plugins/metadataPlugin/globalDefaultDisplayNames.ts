import { Config, Plugin } from "payload/config";
import { CollectionConfig, GlobalConfig } from "payload/types";

const globalDefaultDisplayNames: Plugin = async (
  incomingConfig: Config
): Promise<Config> => {
  const collections = incomingConfig.collections;

  const fields = (collections || []).map((collection: CollectionConfig) => ({
    name: collection.slug,
    type: "text",
    required: true,
  }));

  const displayNameGlobal: GlobalConfig = {
    slug: "display-names",
    fields,
  };

  const config: Config = {
    ...incomingConfig,
    globals: [...(incomingConfig.globals || []), displayNameGlobal],
  };

  return config;
};

export default globalDefaultDisplayNames;
