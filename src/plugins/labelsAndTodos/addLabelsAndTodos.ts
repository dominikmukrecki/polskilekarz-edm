import { Config, Plugin } from "payload/config";
import { CollectionConfig } from "payload/types";

const addLabelsAndTodos: Plugin = async (config: Config): Promise<Config> => {
  // Define labels collection
  const labels: CollectionConfig = {
    slug: "labels",
    admin: {
      useAsTitle: "name",
    },
    fields: [
      {
        name: "name",
        type: "text",
        required: true,
        unique: true,
      },
    ],
  };

  // Define todos collection
  const todos: CollectionConfig = {
    slug: "todos",
    admin: {
      useAsTitle: "text",
    },
    fields: [
      {
        name: "name",
        type: "text",
        required: true,
      },
    ],
  };

  // Add labels and todos to config.collections
  const collections: CollectionConfig[] = [
    ...config.collections,
    labels,
    todos,
  ];

  // Loop through existing collections and add relationship fields to labels and todos
  for (const collection of collections) {
    if (collection.slug !== "labels" && collection.slug !== "todos") {
      collection.fields.push({
        name: "labels",
        label: "Labels",
        type: "relationship",
        relationTo: "labels",
        hasMany: true,
      });
      collection.fields.push({
        name: "todos",
        label: "Todos",
        type: "relationship",
        relationTo: "todos",
        hasMany: true,
      });
    }
  }

  return {
    ...config,
    collections,
  };
};

export default addLabelsAndTodos;
