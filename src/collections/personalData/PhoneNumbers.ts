import { CollectionConfig } from "payload/types";

const PhoneNumbers: CollectionConfig = {
  slug: "phone-numbers",
  fields: [
    {
      name: "number",
      label: "Phone Number",
      type: "text",
      required: true,
      validate: (value) => {
        const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        if (value && !regex.test(value)) {
          return "Invalid phone number format";
        }
        return true;
      },
    },
  ],
};

export default PhoneNumbers;
