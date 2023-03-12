import Patients from "./Patients";

const admin = {
  group: "Medical Data",
};

const personalDataCollections = [Patients];

const MedicalData = personalDataCollections.map((collection) => ({
  ...collection,
  admin: { ...admin, ...collection.admin },
}));

export default MedicalData;
