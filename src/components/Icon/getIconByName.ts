import { icons } from './icons';

export const getIconByName = (name: string) => {
  try {
    return icons[name];
  } catch (e) {
    return icons.default;
  }
};

export default getIconByName;
