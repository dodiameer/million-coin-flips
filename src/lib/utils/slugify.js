export const slugify = (text) => {
  // Turn the text into a slug
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-");
};
