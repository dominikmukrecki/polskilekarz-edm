import { Field } from "payload/types";

export const name: Field = {
  name: "name",
  type: "text",
  required: true,
};

export const addressField: Field = {
    name: 'address',
    type: 'text',
    required: true,
    unique: true,
  };

export const emailField: Field = {
  name: "email",
  type: "email",
  required: true,
  unique: true,
};

export const phoneNumberField: Field = {
    name: 'number',
    type: 'text',
    required: true,
    unique: true,
    validate: (value) => {
      const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
      if (value && !regex.test(value)) {
        return 'Invalid phone number format';
      }
      return true;
    },
  };  