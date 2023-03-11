import { CollectionConfig } from "payload/types";
import { emailField } from "../common/fields";

const Emails: CollectionConfig = {
  slug: "emails",
  fields: [emailField],
};

export default Emails;