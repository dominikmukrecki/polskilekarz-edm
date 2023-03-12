import { GlobalConfig } from 'payload/types';
import DefaultDisplayNames from './DefaultDisplayNames';

const admin = {
  group: 'Personal Data',
};

const pluginsMetadata: GlobalConfig[] = [
  {
    ...DefaultDisplayNames,
    admin,
  },
];

export default pluginsMetadata;