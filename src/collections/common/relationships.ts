import { Field } from "payload/types";
import Emails from "../personalData/Emails";
import PhoneNumbers from "../personalData/PhoneNumbers";
import Addresses from "../personalData/Addresses";


export const emailList: Field = {
name: "emailList",
type: "relationship",
relationTo: Emails.slug,
hasMany: true,
required: true, 
};

export const phoneList: Field = {
name: "phoneList",
type: "relationship",
relationTo: PhoneNumbers.slug,
hasMany: true,
required: true,
};

export const addressList: Field = {
name: "addressList",
type: "relationship",
relationTo: Addresses.slug,
hasMany: true,
required: true,
};