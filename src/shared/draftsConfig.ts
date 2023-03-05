import { VersionConfig } from 'payload/types';

interface GetDraftsConfig {
  data: any;
}

const getDraftsConfig = ({ data }: GetDraftsConfig): VersionConfig => {
  if (Object.keys(data).length === 0) {
    return { autosave: false };
  }
  return { autosave: true };
};

export default getDraftsConfig;
