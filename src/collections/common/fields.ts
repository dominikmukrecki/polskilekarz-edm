import { Field } from 'payload/types';

export const name: Field = {
  name: 'name',
  type: 'text',
  required: true,
};

export const emailList: Field = {
  name: 'emailList',
  type: 'relationship',
  relationTo: 'emails',
  hasMany: true,
  required: true,
};

export const phoneList: Field = {
  name: 'phoneList',
  type: 'relationship',
  relationTo: 'phoneNumbers',
  hasMany: true,
  required: true,
};

export const addressList: Field = {
  name: 'addressList',
  type: 'relationship',
  relationTo: 'addresses',
  hasMany: true,
  required: true,
};