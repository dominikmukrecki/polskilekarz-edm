import PersonalData from './personalData';
import Users from './Users';
import MedicinesIndex from './medicinesIndex';
import MedicalData from './medicalData';

const collections = [
  ...PersonalData,
  ...MedicalData,
  ...MedicinesIndex,
  Users,
];

export default collections;
