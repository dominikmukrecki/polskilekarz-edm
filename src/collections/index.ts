import PersonalData from './personalData';
import Users from './Users';
import Medicines from './Medicines';
import MedicalData from './medicalData';

const collections = [
  ...PersonalData,
  ...MedicalData,
  Users,
  Medicines, 
];

export default collections;
