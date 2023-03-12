// This file defines the Users collection in Payload CMS, including its fields and hooks

import { CollectionConfig } from "payload/types";
import { nameField, emailField } from "./common/fields";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    group: "Administration",
  },
  access: {
    read: () => true,
  },
  fields: [
    nameField,
    emailField,
    // Add more fields as needed
  ],
};

export default Users;

// Improved Users collection file with a row field containing the roles and pesel fields, adjusted width, and removed the sidebar from the age field.
