import { slugify } from "./slugify";

export const generateRandomId = (text = null) => {
  const textToUse = text || "random";
  const randomId = `${slugify(textToUse)}-${Math.random()
    .toString(36)
    .substring(2, 9)}`;
  return randomId;
};
