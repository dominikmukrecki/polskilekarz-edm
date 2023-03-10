import { Field } from "payload/types";

export const nameField: Field = {
  name: "name",
  type: "text",
  required: true,
};

export const addressField: Field = {
  name: "address",
  type: "text",
  unique: true,
};

export const emailField: Field = {
  name: "email",
  type: "email",
  unique: true,
  required: true,
};

export const phoneNumberField: Field = {
  name: "number",
  type: "text",
  unique: true,
  validate: (value) => {
    const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (value && !regex.test(value)) {
      return "Invalid phone number format";
    }
    return true;
  },
};

export const firstNameField: Field = {
  name: "firstName",
  type: "text",
  required: true,
};

export const lastNameField: Field = {
  name: "lastName",
  type: "text",
  required: true,
};

export const birthdateField: Field = {
  name: "birthdate",
  type: "date",
  validate: (value) => {
    const now = new Date();
    const date = new Date(value);
    if (date > now) {
      return "Date cannot be later than now";
    }
    return true;
  },
  required: true,
};

export const genderField: Field = {
  name: "gender",
  type: "select",
  options: [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ],
};

export const commonNameField: Field = {
  name: "commonName",
  type: "text",
  required: true,
};

export const brandNameField: Field = {
  name: "brandName",
  type: "text",
};

export const pharmaceuticalFormField: Field = {
  name: "pharmaceuticalForm",
  type: "text",
  required: true,
};

export const amountAndUnitField: Field = {
  name: "amountAndUnit",
  type: "text",
  required: true,
};
