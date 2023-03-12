import { Medicines } from "./Medicines";

const admin = {
  group: "Medicines Index",
};

const medicinesIndexCollections = [Medicines];

const MedicinesIndex = medicinesIndexCollections.map((collection) => ({
  ...collection,
  admin: { ...admin, ...collection.admin },
}));

export default MedicinesIndex;
