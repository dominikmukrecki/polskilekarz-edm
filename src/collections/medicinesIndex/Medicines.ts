import { CollectionConfig } from "payload/types";
import {
  commonNameField,
  brandNameField,
  pharmaceuticalFormField,
  amountAndUnitField,
} from "../common/fields";

export const Medicines: CollectionConfig = {
  slug: "medicines",
  fields: [
    commonNameField,
    brandNameField,
    pharmaceuticalFormField,
    amountAndUnitField,
  ],
};