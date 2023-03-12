import { Field, Admin } from "payload/types";

const positiveIntegerValidation = (value) => {
  if (
    value !== null &&
    value !== undefined &&
    (!Number.isInteger(value) || value <= 0)
  ) {
    return "It should be a positive integer";
  }
  return true;
};

const fieldAdmin: Admin = {
  readOnly: false,
  position: "sidebar",
  width: "50%",
  disabled: true,
};

const chatwootContactIDField: Field = {
  name: "chatwootContactID",
  type: "number",
  validate: positiveIntegerValidation,
  admin: fieldAdmin,
};

const chatwootAccountIDField: Field = {
  name: "chatwootAccountID",
  type: "number",
  validate: positiveIntegerValidation,
  admin: fieldAdmin,
};

export const chatwootContact: Field = {
  type: "row",
  admin: {
    position: "sidebar",
  },
  fields: [chatwootContactIDField, chatwootAccountIDField],
};
