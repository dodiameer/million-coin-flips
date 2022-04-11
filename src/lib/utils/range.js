export const range = (start, end) => {
  return Array.from({ length: end - start }, (_, i) => start + i);
};
