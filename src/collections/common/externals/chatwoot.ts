import { Field } from "payload/types";

const positiveIntegerValidation = (value) => {
  if (
    value === undefined ||
    value === null ||
    !Number.isInteger(value) ||
    value <= 0
  ) {
    return "It should be a positive integer";
  }
  return true;
};

const fieldAdmin = {
  readOnly: true,
  disabled: true,
};

const chatwootContactIDField: Field = {
  name: "chatwootContactID",
  type: "number",
  required: false, // set required to false
  validate: positiveIntegerValidation,
  admin: fieldAdmin,
};

const chatwootAccountIDField: Field = {
  name: "chatwootAccountID",
  type: "number",
  required: false, // set required to false
  validate: positiveIntegerValidation,
  admin: fieldAdmin,
};

export const chatwootContact: Field = {
  type: "row",
  fields: [chatwootContactIDField, chatwootAccountIDField],
};
